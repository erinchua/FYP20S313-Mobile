import { db } from "./firebase";

export function isConflict(progItem: any, uid: any) {
    //let registered: any;

    db.collection('PersonalScheduler').doc(uid).onSnapshot((snapshot: any) => {
        const registered = snapshot.data().registeredProgrammes;
    
        registered.forEach((item: any) => {
            const itemType = item.split("-");

            switch (itemType[0]) {
                case "talk":
                    return db.collection('ProgrammeTalks').doc(item).onSnapshot((doc: any) => {
                        //console.log(doc.data().startTime.slice(-2, doc.data().startTime.length))
                        if (progItem.date == doc.data().date) {
                            //console.log(true)
                            let progStart = Number(progItem.startTime.split(":")[0]), progEnd = Number(progItem.endTime.split(":")[0]);
                            let itemStart = Number(doc.data().startTime.split(":")[0]), itemEnd = Number(doc.data().endTime.split(":")[0]);
                            //console.log(progStart, itemStart)
                            if (progItem.startTime.slice(-2, progItem.startTime.length) == "PM") progStart += 12;
                            if (progItem.endTime.slice(-2, progItem.startTime.length) == "PM") progStart += 12;
                            if (doc.data().startTime.slice(-2, doc.data().startTime.length) == "PM") progStart += 12;
                            if (doc.data().endTime.slice(-2, doc.data().endTime.length) == "PM") progStart += 12;

                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd))
                                console.log("conflict", true)
                        }
                    });
                case "tour":
                    //return db.collection('GuidedTours').doc(item).onSnapshot(doc => {});
                case "performance":
                    //return db.collection('Performances').doc(item).onSnapshot(doc => {});
                default:
                    return;
            }
        });
    });

    //progitem is item from main collection
    //get list of registered items
    //get their date and time
    //compare with progitem
}