import { IonGrid, IonRow, IonCol, IonText, IonItemDivider, IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react';

import '../../css/Global.css';
import '../../css/OpenHouseActivities.css'

const PrizesContent: React.FC<{ prizes: any }> = props => {

    const [alert, setAlert] = useState({ registerSuccess: false, registerFail: false, loading: false });

    const availablePrizes = props.prizes.filter((prize: any) => {
        return prize.isRedeemed === false;
    });
    const redeemedPrizes = props.prizes.filter((prize: any) => {
        return prize.isRedeemed === true;
    });

    return (

        <>
            <IonAlert
                isOpen={alert.registerSuccess}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Redeemed'}
                message={'Congratulations! You have successfully redeemed this prize!'}
                buttons={['Close']}
            ></IonAlert>

            <IonAlert
                isOpen={alert.registerFail}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Error Occurred'}
                message={'Sorry! This prize has been fully redeemed!'}
                buttons={['Close']}
            ></IonAlert>

            <IonText><div style={{ marginTop: "2%", marginBottom: "-7%", marginLeft: "3%", fontWeight: "bold", fontSize: "95%", color: "#424242" }}>Prizes</div></IonText>
            <IonItemDivider color="#EFEFEF"></IonItemDivider>
            <IonText color="medium"><div style={{ margin: "2%", fontSize: "80%" }}>* Redemption booth is located at Blk A Atrium (Near the lift lobby)</div></IonText>
            <IonGrid id="prizesContent-tableGrid">
                <IonRow id="prizesContent-tableHeader" className="ion-justify-content-center">
                    <IonCol sizeSm="3" className="prizesContent-Header ion-text-wrap">Prizes No.</IonCol>
                    <IonCol sizeSm="3" className="prizesContent-Header ion-text-wrap">Prize</IonCol>
                    <IonCol sizeSm="2" className="prizesContent-Header ion-text-wrap">Points to Redeem</IonCol>
                    <IonCol sizeSm="4" className="prizesContent-Header ion-text-wrap">Redeem</IonCol>
                </IonRow>
                {availablePrizes.map((prize: any, index: any) => {
                    return (
                        <IonRow className="ion-justify-content-center" key={prize.id}>
                            <IonCol sizeSm="3" className="prizesContent-Data ion-text-wrap">{index + 1}</IonCol>
                            <IonCol sizeSm="3" className="prizesContent-Data ion-text-wrap">{prize.prizeName}</IonCol>
                            <IonCol sizeSm="2" className="prizesContent-Data ion-text-wrap">{prize.prizePointsCost}</IonCol>
                            <IonCol sizeSm="4" className="prizesContent-Data ion-text-wrap"><IonButton size="small" id="redeemButton">Redeem</IonButton></IonCol>
                        </IonRow>
                    )
                })}

                {redeemedPrizes.map((prize: any, index: any) => {
                    return (
                        <IonRow className="ion-justify-content-center" key={prize.id}>
                            <IonCol sizeSm="3" className="prizesContent-Data ion-text-wrap">NIL</IonCol>
                            <IonCol sizeSm="3" className="prizesContent-Data ion-text-wrap">{prize.prizeName}</IonCol>
                            <IonCol sizeSm="2" className="prizesContent-Data ion-text-wrap">{prize.prizePointsCost}</IonCol>
                            <IonCol sizeSm="4" className="prizesContent-Data ion-text-wrap"><IonButton size="small" disabled id="redeemDisabledButton">Redeem</IonButton></IonCol>
                        </IonRow>
                    )
                })}

            </IonGrid>
        </>
    );

};

export default PrizesContent;