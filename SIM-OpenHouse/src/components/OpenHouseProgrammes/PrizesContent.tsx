import { IonGrid, IonRow, IonCol, IonText, IonItemDivider, IonButton, IonAlert } from '@ionic/react';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';

import '../../css/Global.css';
import '../../css/OpenHouseActivities.css'
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';

const PrizesContent: React.FC<{ prizes: any, venue: any }> = props => {
    const { userID } = useAuth();

    const [alert, setAlert] = useState({ redeemSuccess: false, redeemFail: false, loading: false });
    const [errorMessage, setErrorMessage] = useState("");
    const [gameProfile, setGameProfile] = useState<any>({ points: 0, redeemed: [] });

    //const prizes = props.prizes.filter((prize: any) => { return prize.id !== "venue" });
    //const venue = props.prizes.filter((prize: any) => { return prize.id === "venue" });
    console.log(props.venue)

    const handleRedeem = async (prize: any) => {
        try {
            setAlert({ redeemSuccess: false, redeemFail: false, loading: true });

            if (gameProfile.points >= prize.prizePointsCost && !gameProfile.redeemed.includes(prize.id)) {
                const batch = db.batch();

                const pointsDeduct = firebase.firestore.FieldValue.increment(-prize.prizePointsCost);
                const gamesRef = db.collection('Games').doc(userID);
                batch.update(gamesRef, {
                    redeemed: firebase.firestore.FieldValue.arrayUnion(prize.id),
                    points: pointsDeduct
                });

                const stockDecrement = firebase.firestore.FieldValue.increment(-1);
                const prizeRef = db.collection('Prizes').doc(prize.id);
                batch.update(prizeRef, {
                    stock: stockDecrement
                });

                await batch.commit();
            } else {
                if (gameProfile.points < prize.prizePointsCost)
                    setErrorMessage("You don't have enough points to redeem that.");
                else if (gameProfile.redeemed.includes(prize.id))
                    setErrorMessage("You have already redeemed that prize.");

                throw "Error occured";
            }

            setAlert({ redeemSuccess: true, redeemFail: false, loading: false });
        } catch(e) {
            setAlert({ redeemSuccess: false, redeemFail: true, loading: false });
            return console.log(e);
        }
    }

    useEffect(() => {
        return db.collection('Games').doc(userID).onSnapshot(doc => {
            setGameProfile({
                points: doc.data()?.points,
                redeemed: doc.data()?.redeemed
            });
        });
    }, []);

    return (
        <>
            <IonAlert
                isOpen={alert.redeemSuccess}
                onDidDismiss={() => setAlert({ redeemSuccess: false, redeemFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Redeemed'}
                message={'Congratulations! You have successfully redeemed this prize!'}
                buttons={['Close']}
            ></IonAlert>

            <IonAlert
                isOpen={alert.redeemFail}
                onDidDismiss={() => setAlert({ redeemSuccess: false, redeemFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Oops! Something went wrong.'}
                message={errorMessage}
                buttons={['Close']}
            ></IonAlert>

            <IonText><div style={{ marginTop: "2%", marginBottom: "-7%", marginLeft: "3%", fontWeight: "bold", fontSize: "95%", color: "#424242" }}>Prizes</div></IonText>
            <IonItemDivider color="#EFEFEF"></IonItemDivider>
            <IonText color="medium"><div style={{ margin: "2%", fontSize: "80%" }}>* Redemption booth is located at Blk A Atrium (Near the lift lobby)</div></IonText>
            <IonGrid id="prizesContent-tableGrid">
                <IonRow id="prizesContent-tableHeader" className="ion-justify-content-center">
                    <IonCol sizeSm="2" size="2" className="prizesContent-Header ion-text-wrap">Prizes No.</IonCol>
                    <IonCol sizeSm="3" size="3" className="prizesContent-Header ion-text-wrap">Prize</IonCol>
                    <IonCol sizeSm="2" size="2" className="prizesContent-Header ion-text-wrap">Stock</IonCol>
                    <IonCol sizeSm="2" size="2" className="prizesContent-Header ion-text-wrap">Points to Redeem</IonCol>
                    <IonCol sizeSm="3" size="3" className="prizesContent-Header ion-text-wrap">Redeem</IonCol>
                </IonRow>
                {props.prizes.map((prize: any, index: any) => {
                    return (
                        <IonRow className="ion-justify-content-center" key={prize.id}>
                            <IonCol sizeSm="2" size="2" className="prizesContent-Data ion-text-wrap">{index + 1}</IonCol>
                            <IonCol sizeSm="3" size="3" className="prizesContent-Data ion-text-wrap">{prize.prizeName}</IonCol>
                            <IonCol sizeSm="2" size="2" className="prizesContent-Data ion-text-wrap">{prize.stock}</IonCol>
                            <IonCol sizeSm="2" size="2" className="prizesContent-Data ion-text-wrap">{prize.prizePointsCost}</IonCol>
                            <IonCol sizeSm="4" className="prizesContent-Data ion-text-wrap">
                                <IonButton size="small" id="redeemButton" onClick={() => handleRedeem(prize)} disabled={prize.stock <= 0 ? true : false}>Redeem</IonButton>
                            </IonCol>
                        </IonRow>
                    )
                })}
            </IonGrid>
        </>
    );

};

export default PrizesContent;