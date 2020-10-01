import { IonGrid, IonRow, IonCol, IonText, IonItemDivider, IonButton } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/OpenHouseActivities.css'

const PrizesContent: React.FC<{ prizes: any }> = props => {

    const availablePrizes = props.prizes.filter((prize: any) => {
        return prize.isRedeemed == false
    })
    const redeemedPrizes = props.prizes.filter((prize: any) => {
        return prize.isRedeemed == true
    })

    return (

        <>
            <IonText><div style={{ marginTop: "2%", marginBottom: "-7%", marginLeft: "3%", fontWeight: "bold", fontSize: "95%" }}>Prizes</div></IonText>
            <IonItemDivider color="#EFEFEF"></IonItemDivider>
            <IonText color="medium"><div style={{ margin: "2%", fontSize: "80%" }}>* Redemption booth is located at Blk A Atrium (Near the lift lobby)</div></IonText>
            <IonGrid id="prizesContent-tableGrid">
                <IonRow id="prizesContent-tableHeader" className="ion-justify-content-center">
                    <IonCol size-sizeSm="3" className="prizesContent-Header ion-text-wrap">Prizes No.</IonCol>
                    <IonCol size-sizeSm="3" className="prizesContent-Header ion-text-wrap">Prize</IonCol>
                    <IonCol size-sizeSm="2" className="prizesContent-Header ion-text-wrap">Points to Redeem</IonCol>
                    <IonCol size-sizeSm="4" className="prizesContent-Header ion-text-wrap">Redeem</IonCol>
                </IonRow>
                {availablePrizes.map((prize: any, index: any) => {
                    return (
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">{index + 1}</IonCol>
                            <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">{prize.prizeName}</IonCol>
                            <IonCol size-sizeSm="2" className="prizesContent-Data ion-text-wrap">{prize.prizePointsCost}</IonCol>
                            <IonCol size-sizeSm="4" className="prizesContent-Data ion-text-wrap"><IonButton size="small" id="redeemButton">Redeem</IonButton></IonCol>
                        </IonRow>
                    )
                })}

                {redeemedPrizes.map((prize: any, index: any) => {
                    return (
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">NIL</IonCol>
                            <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">{prize.prizeName}</IonCol>
                            <IonCol size-sizeSm="2" className="prizesContent-Data ion-text-wrap">{prize.prizePointsCost}</IonCol>
                            <IonCol size-sizeSm="4" className="prizesContent-Data ion-text-wrap"><IonButton size="small" disabled id="redeemDisabledButton">Redeem</IonButton></IonCol>
                        </IonRow>
                    )
                })}

            </IonGrid>
        </>
    );

};

export default PrizesContent;