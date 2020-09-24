import React, { useState } from "react";
import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import { useForm } from "react-hook-form";
import { auth, db, storage } from "../firebase";

const CreateClubAndCouncil: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [fileURL, setFileURL] = useState(null);

  const uploadImage = async (e: any) => {
    try {
      const imageFile = e.target.files[0];
      const storageRef = storage.ref(); //Reference to the root storage
      const fileRef = storageRef.child("ClubsAndCouncil/" + imageFile.name);
      await fileRef.put(imageFile);
      setFileURL(await fileRef.getDownloadURL());
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      console.log(data);

      db.collection("ClubsAndCouncils").add({
        categoryType: data.categoryType,
        clubsAndCouncilsTitle: data.title,
        clubsAndCouncilsDescription: data.description,
        clubsAndCouncilsLogo: fileURL,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>Club Type: </IonLabel>
            </IonCol>

            <IonCol>
              <IonSelect
                placeholder="Select One"
                name="categoryType"
                ref={register({
                  required: "Category Type is required.",
                })}
              >
                <IonSelectOption>Arts & Culture</IonSelectOption>
                <IonSelectOption>International Students Club</IonSelectOption>
                <IonSelectOption>Student Councils</IonSelectOption>
                <IonSelectOption>Special Interest Clubs</IonSelectOption>
                <IonSelectOption>Sports & Fitness</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel>Club Title: </IonLabel>
            </IonCol>
            <IonCol>
              <IonInput type="text" name="title" ref={register} placeholder="Enter club title"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Club Description: </IonLabel>
            </IonCol>
            <IonCol>
              <IonItem color="primary">
                <IonTextarea name="description" ref={register} placeholder="Enter club description"></IonTextarea>
              </IonItem>{" "}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <input name="image" type="file" onChange={uploadImage}></input>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton type="submit">Create Club</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </form>
    </div>
  );
};

export default CreateClubAndCouncil;
