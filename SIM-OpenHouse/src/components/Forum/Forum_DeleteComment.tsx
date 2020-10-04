import { IonAlert, IonButton } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Forum_DeleteComment: React.FC = () => {

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    return (
        <>
        <IonAlert isOpen={showDeleteAlert} onDidDismiss={() => setShowDeleteAlert(false)} cssClass='alertBox' header={'Delete Comment'} message={'Are you sure you want to delete the comment?'} buttons={['NO', 'YES']}></IonAlert>

        <IonButton onClick={() => setShowDeleteAlert(true)} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faTrash} size="lg" /></IonButton>
        </>
    );
};

export default Forum_DeleteComment;