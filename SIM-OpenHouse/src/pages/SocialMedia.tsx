import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/SocialMedia.css';
import TopNav from '../components/TopNav';

const SocialMedia: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Social Media" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen className="socialMedia-content">
                <IonGrid id="socialMedia-grid">
                    <IonRow className="ion-justify-content-center" id="socialMedia-grid">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2FSIM-GE-13-109808147562110%2Fposts%2F&tabs=timeline,events&width=340&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1118939098500823" width="340" height="800" style={{border: 'none', overflow: 'hidden'}} scrolling="yes" frameBorder="0" allowFullScreen allow="encrypted-media"></iframe>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default SocialMedia;