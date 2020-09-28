import { IonGrid, IonRow, IonCol, IonText, IonItemDivider, IonButton } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/OpenHouseActivities.css'

const PrizesContent: React.FC = () => {

    return (
        <>
        <IonText><div style={{marginTop: "2%", marginBottom: "-7%", marginLeft: "3%", fontWeight: "bold", fontSize: "95%" }}>Prizes</div></IonText>
        <IonItemDivider color="#EFEFEF"></IonItemDivider>
        <IonText color="medium"><div style={{margin: "2%", fontSize: "80%"}}>* Redemption booth is located at Blk A Atrium (Near the lift lobby)</div></IonText>
        <IonGrid id="prizesContent-tableGrid">
            <IonRow id="prizesContent-tableHeader" className="ion-justify-content-center">
                <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">Prizes No.</IonCol>
                <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">Prize</IonCol>
                <IonCol size-sizeSm="2" className="prizesContent-Data ion-text-wrap">Points to Redeem</IonCol>
                <IonCol size-sizeSm="4" className="prizesContent-Data ion-text-wrap">Redeem</IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">1</IonCol>
                <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">Day One</IonCol>
                <IonCol size-sizeSm="2" className="prizesContent-Data ion-text-wrap">Sample</IonCol>
                <IonCol size-sizeSm="4" className="prizesContent-Data ion-text-wrap"><IonButton size="small" id="redeemButton">Redeem</IonButton></IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">2</IonCol>
                <IonCol size-sizeSm="3" className="prizesContent-Data ion-text-wrap">Day One</IonCol>
                <IonCol size-sizeSm="2" className="prizesContent-Data ion-text-wrap">Sample</IonCol>
                <IonCol size-sizeSm="4" className="prizesContent-Data ion-text-wrap"><IonButton size="small" disabled id="redeemDisabledButton">Redeem</IonButton></IonCol>
            </IonRow>
        </IonGrid>
        </>
    );

};

export default PrizesContent;