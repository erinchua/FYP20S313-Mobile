import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faComments, faMapSigns, faMapMarkedAlt, faInfoCircle, faPhotoVideo, faBookOpen, faHands, faBell } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

import '../css/Global.css';
import '../css/Home.css';
import TopNav from '../components/TopNav'
import gif from '../img/home/SIM Open House 2020 Banner.gif';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <TopNav title="My Home" route='/u/home' backarrow={false} hamburger={true} />
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid id="homeGrid">
          <IonRow>
            <IonCol sizeSm="12" className="gifCol">
              <IonImg src={gif}></IonImg>
            </IonCol>
          </IonRow>

          {/* Row 1 */}
          <IonRow className="ion-justify-content-around homeMainRow">
            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/openHouseMain">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faCalendar} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Open House Programmes</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/mySchedule">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faCalendarAlt} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">My Schedule</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/forum">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faComments} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Forum</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>
          </IonRow>

          {/* Row 2 */}
          <IonRow className="ion-justify-content-around homeMainRow">
            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/campusFacilitiesMap">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faMapSigns} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Campus Facilities Map</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/gettingToSIMHQ">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faMapMarkedAlt} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Getting to SIM HQ</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/usefulInfoMain">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faInfoCircle} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Useful Info</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>
          </IonRow>

          {/* Row 3 */}
          <IonRow className="ion-justify-content-around homeMainRow">
            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/socialMedia">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faPhotoVideo} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Social Media</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink href="/u/study@SIMMain">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faBookOpen} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Study@SIM</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/studentLife@SIM">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faHands} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Student Life@SIM</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>
          </IonRow>

          {/* Row 4 */}
          <IonRow className="ion-justify-content-around homeMainRow">
            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/announcements">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faBell} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Announcements</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol">
              <IonRouterLink routerLink="/u/brochures">
                <IonRow className="ion-justify-content-center">
                  <FontAwesomeIcon className="homeIcons" size="2x" icon={faReadme} />
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonText className="homeText">Brochures</IonText>
                </IonRow>
              </IonRouterLink>
            </IonCol>

            <IonCol sizeSm="4" className="homeMainCol"></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
