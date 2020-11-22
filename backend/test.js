const db = require('./config/adminConfig')
const admin = require('firebase-admin');
const { doc } = require('./config/adminConfig');

//db.collection('Test').doc('test').update({testarray: admin.firestore.FieldValue.arrayUnion('hello')});

const userID = "CLtDkQ9BfdQ2XF52F4t2y6jbZxh2";
{/* db.collection('PersonalScheduler').doc(userID).get().then(doc => {
    const items = [];
    const activities = doc.data().registeredProgrammes;
    activities.forEach(item => {
        const itemType = item.split("-");
        switch (itemType[0]) {
            case "talk":
                return db.collection('ProgrammeTalks').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "tour":
                //return db.collection('GuidedTours').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "performance":
                //return db.collection('Performances').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "activity":
                //return db.collection('GamesActivities').doc(item).onSnapshot(doc => items.push(doc.data()))
            default:
        }
    });
    setTimeout(() => {
        const mapped = items.map((doc) => {
            return {
                id: doc.id,
                name: doc.talkName || doc.tourName || doc.performanceName || doc.gameBoothName,
                date: doc.date,
                startTime: doc.startTime,
                endTime: doc.endTime || null,
                venue: doc.venue
            }
        })
        console.log(mapped)
    }, 1000);
}); */}

{/* const prog = {
    awardingUni: "University of London",
    capacityLimit: 50,
    date: "21-Nov-2020",
    endTime: "11:00AM",
    hasRecording: false,
    id: "talk-002",
    isLive: false,
    noRegistered: 0,
    startTime: "10:00AM",
    talkName: "University of London - Computer Science Undergraduate",
    venue: "SIM HQ BLK B LT B.2.01" 
}
db.collection('PersonalScheduler').doc(userID).onSnapshot(snapshot => {
    const registered = snapshot.data().registeredProgrammes;
    
        registered.forEach((item) => {
            const itemType = item.split("-");

            switch (itemType[0]) {
                case "talk":
                    db.collection('ProgrammeTalks').doc(item).onSnapshot(doc => {
                        //console.log(doc.data().startTime.slice(-2, doc.data().startTime.length))
                        if (prog.date == doc.data().date) {
                            console.log("date", true)
                            let progStart = Number(prog.startTime.split(":")[0]), progEnd = Number(prog.endTime.split(":")[0]);
                            let itemStart = Number(doc.data().startTime.split(":")[0]), itemEnd = Number(doc.data().endTime.split(":")[0]);
                            //console.log(progStart, itemStart)
                            if (prog.startTime.slice(-2, prog.startTime.length) == "PM") progStart += 12;
                            if (prog.endTime.slice(-2, prog.startTime.length) == "PM") progStart += 12;
                            if (doc.data().startTime.slice(-2, doc.data().startTime.length) == "PM") progStart += 12;
                            if (doc.data().endTime.slice(-2, doc.data().endTime.length) == "PM") progStart += 12;

                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd))
                                console.log("time", true)
                            else console.log("time", false)
                        } else console.log("date", false)
                    });
                //case "tour":
                    //return db.collection('GuidedTours').doc(item).onSnapshot(doc => {});
                //case "performance":
                    //return db.collection('Performances').doc(item).onSnapshot(doc => {});
                default:
                    return;
            }
        });
}); */}

{/* db.collection("Openhouse").orderBy('id', 'desc').limit(1).get().then(snapshot => {
    const arr = []
    snapshot.forEach(doc => {
        const data = doc.data().day;
        //console.log(data)
        data.forEach(day => arr.push(day))
    })
    console.log(arr[0].date)
}) */}

/* const dateObject1 = {
    date: "21-Nov-2020",
    start: "11:30AM", end: "12:30PM"
}
const dateObject2 = {
    date: "21-Nov-2020",
    start: "11:00AM", end: "12:00PM"
} */
{/* function toDateObject(date, time) {
    if (time == "") time = "00:00AM";

    const dateSplit = date.split("-");
    const timeSplit = time.split(":");

    const monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const day = +dateSplit[0], month = +monthString.indexOf(dateSplit[1]) + 1, year = +dateSplit[2];
    let hours = +timeSplit[0];
    const minutes = +timeSplit[1].slice(0, 2), meridiem = timeSplit[1].slice(-2, timeSplit[1].length);
    const seconds = 0, milliseconds = 0;

    if (hours == 12 && meridiem.toUpperCase() == "AM") hours = 0;
    if (hours < 12 && meridiem.toUpperCase() == "PM") hours += 12;

    return new Date(year, month, day, hours, minutes, seconds, milliseconds);
}; */}
//const start1 = toDateObject(dateObject1.date, dateObject1.start), end1 = toDateObject(dateObject1.date, dateObject1.end);
//const start2 = toDateObject(dateObject2.date, dateObject2.start), end2 = toDateObject(dateObject2.date, dateObject2.end);
//console.log((start1 >= start2 && start1 < end2) || (end1 > start2 && end1 <= end2))
//console.log(end1-start1)
//console.log(toDateObject("21-Nov-2020", "12:12AM").toLocaleString())

//console.log(toDateObject(dateObject.dateLater, dateObject.timeLater), toDateObject(dateObject.dateEarly, dateObject.timeEarly))
//console.log(toDateObject(dateObject.dateLater, dateObject.timeLater) > toDateObject(dateObject.dateEarly, dateObject.timeEarly))


{/* db.collection('Openhouse').get().then(snapshot => {
    const hours = [];

    snapshot.forEach(doc => {
        const days = doc.data().day;

        if (Array.isArray(days))
            days.forEach(day => {

                const duration = Math.floor((+toDateObject(day.date, day.endTime) - +toDateObject(day.date, day.startTime)) / 3600000);
                console.log(Array.from(Array(duration).keys()))
                //hours.push(Array.from(Array(duration).keys()));
            });
    });
    console.log(hours.key())
    
    //hours.forEach(ticks => console.log(ticks))
}) */}

//console.log(new Date().toTimeString())
//console.log(admin.firestore.FieldValue.serverTimestamp())

{/* db.collection('Forum').get().then(uRef => {
    const comments = [];

    uRef.forEach(user => {
        //console.log(user.id)
        return db.collection('Forum').doc(user.id).collection('Comments').where("questionId", "==", 1602693189449).onSnapshot(entries => {
            //entries.forEach(doc => console.log(doc.data()))
            entries.docChanges().forEach(change => {
                console.log(change.doc.data())
                comments.unshift({
                    id: change.doc.id,
                    entry: change.doc.data().entry,
                    dateTime: change.doc.data().dateTime,
                    user: change.doc.data().posterName,
                    uid: change.doc.data().posterId,
                    removed: change.doc.data().deleted
                });
                //console.log(comments)
            });
        });
    });
    setTimeout(() => {
        console.log(comments)
    }, 500);
}); */}

{/* db.collection('Forum').doc('0XluLpH5BHZLeCBwYVMytlRO3Ri1').collection('Comments').where("deleted", "==", false).onSnapshot(snaps => {
    const posts = [];
    
    snaps.forEach(snap => {
        //console.log(snap.data().questionId.toString())
        db.collection('Forum').get().then(users => {
            users.forEach(user => {
                db.collection('Forum').doc(user.id).collection('Questions').doc(snap.data().questionId.toString()).get().then(question => {
                    if(question.exists) console.log(question.data())
                })
            })
        })
        posts.push(snap.data())
    });
}); */}

{/* const all = [];
db.collection('Forum').get().then(users => {

    users.forEach(async user => {
        await db.collection('Forum').doc(user.id).collection('Questions').get().then(docs => {
            docs.forEach(doc => {
                all.push({
                    id: +doc.id,
                    entry: doc.data().entry
                });
            });
        });
        
        await db.collection('Forum').doc(user.id).collection('Comments').get().then(docs => {
            docs.forEach(doc => {
                all.push({
                    id: +doc.id,
                    entry: doc.data().entry,
                    questionId: +doc.data().questionId
                });
            });
        });
    });
});
setTimeout(() => {
    const matchedPosts = []
    //console.log(all)
    const keyword = "comment";
    all.forEach(post => {
        //console.log(post.entry.indexOf(keyword))
        //console.log(post.hasOwnProperty('questionId'))
        if (post.entry.toLowerCase().indexOf(keyword) != -1) {
            if (post.hasOwnProperty('questionId')) {
                all.forEach(ele => {
                    if (ele.id === post.questionId) {
                        post = ele
                    }
                })
            }
            console.log(matchedPosts.filter(result => { return post.id === result.id }).length > 0)
            if (!(matchedPosts.filter(result => { return post.id === result.id }).length > 0))
                matchedPosts.push(post)
        }
    });
    console.log(matchedPosts)
}, 1000); */}

{/* function mapTo (doc) {
    return {
        ...doc.data()
    }
}
db.collection('Brochures').get().then(({docs}) => {
    console.log(docs.map(mapTo))
}) */
/* function sortTime (a, b) {
    let aHour = +a.split(":")[0], bHour = +b.split(":")[0];
    const aMins = +a.split(":")[1].slice(0, 2), bMins = +b.split(":")[1].slice(0, 2);
    const aMeridiem = a.split(":")[1].slice(-2, a.split(":")[1].length), bMeridiem = b.split(":")[1].slice(-2, b.split(":")[1].length);

    if ((aHour > 0 && aHour < 12) && aMeridiem === "PM") aHour += 12;
    if ((bHour > 0 && bHour < 12) && bMeridiem === "PM") bHour += 12;

    console.log(aHour, aMins, aMeridiem)
    console.log(bHour, bMins, bMeridiem)
}
sortTime("10:00AM", "1:30PM") */}

{/* const a = [{num: 1}, {num: 2}, {num: 3}, {num: 1}, {num: 4}]
uniqueArray = a.filter(function(item, pos, self) {
    return self.indexOf(item) === pos;
})
console.log(uniqueArray) */}

{/* let registeredInfo = {};
db.collection('Students').doc('0XluLpH5BHZLeCBwYVMytlRO3Ri1').get().then(student => {
    if (student.exists) {
        registeredInfo.studentName = student.data().firstName;
        registeredInfo.lastName = student.data().lastName;
        registeredInfo.email = student.data().email;
    }
    console.log(registeredInfo)
}) */}

/* db.collection('Games').doc('2S7lngNuQkabNnZip7HZ5RoVAc63').get().then(doc => {
    console.log(doc.data().redeemed.includes("prize-002"))
}); */

{/* db.collection("Prizes").get().then((snapshot) => {
    const prizes = [];
    const venue = [];
    snapshot.forEach((doc) => {
        const data = doc.data();

        if (doc.id.includes("prize")) {
            prizes.push(data);
        } else if (doc.id.includes("venue")) {
            for (let i = 0; i < Object.keys(data.day).length; i++) {
                const day = data.day[Object.keys(data.day)[i]];
                venue.push(day);
            }
        }
    });
    console.log(prizes);
    console.log(venue);
}) */}

//console.log(new Date().getTime())

{/* db.collection('CampusLocation').get().then(snaps => {
    snaps.forEach(doc => {
        const data = doc.data();
        if (doc.id === "bus") {
            const busInfo = [];

            for (let i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] !== "id") {
                    const busArr = [];
                    const buses = data[Object.keys(data)[i]].buses;
                    const description = data[Object.keys(data)[i]].description;

                    for (let i = 0; i < Object.keys(buses).length; i++) {
                        busArr.push(buses[Object.keys(buses)[i]]);
                    }

                    busInfo.push({ description: description, buses: busArr.join(", ") });
                }
            }

            console.log(busInfo);

            //console.log(simHqBusArr.join(", "));
            //console.log(oppSimHqBusArr.join(", "));
        }
        if (doc.id === "car") {
            const carparkInfo = data.carParkingDescription;
            //console.log({ byCar: data.carDescription, carparkInfo: carparkInfo });
            console.log(carparkInfo)
        }
    });
}); */}
{/* const sim = ['154B', '61', '151', '154', '74E', '75', '74', '151E', '184', '52']
const oppSim = ['74E', '74', '154', '52', '75', '61', '151', '184', '151E']
function sortFunction(a, b) {
    const aSplit = a.match(/[a-zA-Z]+|\d+/ig)
    const bSplit = b.match(/[a-zA-Z]+|\d+/ig)

    if (+aSplit[0] > +bSplit[0]) {
        return 1;
    }

    if (+aSplit[0] < +bSplit[0]) {
        return -1;
    }

    if (+aSplit[0] == +bSplit[0]) {
        //console.log("a " + aSplit)
        //console.log("b " + bSplit)
        if (aSplit[1] == '' && bSplit[1] != '') {
            return 1;
        }
        if (aSplit[1] != '' && bSplit[1] == '') {
            return -1;
        }
        if (aSplit[1] != '' && bSplit[1] != '') {
            if (aSplit[1] < bSplit[1]) {
                return -1;
            }
            if (aSplit[1] > bSplit[1]) {
                return 1;
            }
        }
    }
    return 0;
}
console.log(sim.sort(sortFunction).join(", "))
console.log(oppSim.sort(sortFunction).join(", ")) */
/* db.collection("CampusLocation").doc("bus").get().then((snapshot) => {
    const oppSimHq = [];
    const simHq = [];

    const oppSim = snapshot.data().oppSimHq.buses;
    for (var i = 0; i < Object.keys(oppSim).length; i++) {
        oppSimHq.push(oppSim[Object.keys(oppSim)[i]]);
    }

    const sim = snapshot.data().simHq.buses;
    for (var i = 0; i < Object.keys(sim).length; i++) {
        simHq.push(sim[Object.keys(sim)[i]]);
    }

    //console.log("busOppSimArray", oppSimHq.sort(sortFunction).join(", "))
    //console.log("busSimArray", simHq.sort(sortFunction).join(", "))
    console.log("sim", simHq)
    console.log("simjoin", oppSimHq)
}); */}
//console.log('A' > 'Z')

{/* db.collection('ContactInfo').get().then(snapshot => {
    const local = [];
    const overseas = [];

    snapshot.forEach((doc) => {
        const data = doc.data();

        if (data.country === "local") {
            const opHours = data.operatingHours;
            const opArr = [];

            for (let i = 0; i < Object.keys(opHours).length; i++) {
                const op = opHours[Object.keys(opHours)[i]];

                if (op !== "") {
                    opArr.push(op);
                }
            }
            const contact = {
                ...data,
                operatingHours: opArr
            }
            console.log(contact)
        }
    });
}); */}

/* db.collection('Brochures').where('description', 'in', ['Scholarship-FAQ', 'Bursary-FAQ']).get().then(docs => {
    docs.forEach(doc => {
        console.log(doc.data())
    })
}) */

//const str = "https://www.facebook.com/permalink.php?story_fbid=133281431880725&id=109981057544096";
//console.log(str.match(/\d+/ig))

//console.log(new Date().toDateString())

/* function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
function toScholarshipBursary(doc) {
    return { id: doc.id, ...doc.data() }
}
db.collection('Bursary').get().then(({ docs }) => {
    const arr = docs.map(toScholarshipBursary).filter(a => { return a.segment === "Other Financial Assistance" }).reduce((accu, curr) => (accu[camalize(curr.header)] = curr, accu), {})
    //console.log(arr.requiredSupportingDocuments)
    console.log(arr)
}) */

/* const anno = db.collection('Announcements').doc(new Date().getTime().toString());
anno.set({
    id: +anno.id,
    title: "hello there",
    details: "general kenobi",
    date: "5-Nov-2020",
    time: "3:10AM"
}) */

//console.log(new Date(Date.now() + 1000 * 5).toLocaleString())
//console.log(new Date(Date.now()).toLocaleString())
//console.log(Date.now())
//console.log(new Date().toLocaleString())

/* db.collection('StudentCare').get().then(docs => {
    const studCare = [];

    docs.forEach(doc => {
        let data = doc.data();

        if (data.id === "workPlayLiveWell") {
            const activitiesData = doc.data().activities;
            const activities = [];
            
            for (let i = 0; i < Object.keys(activitiesData).length; i++) {
                const activity = {
                    id: Object.keys(activitiesData)[i],
                    ...activitiesData[Object.keys(activitiesData)[i]]
                }
                activities.push(activity)
            }

            data = {
                ...doc.data(),
                activities: activities
            }
        }

        studCare.push(data);
        //console.log(data)
    });
    console.log(studCare.reduce((accu, curr) => (accu[curr.id] = curr, accu), {}))
}); */

var text = 'workPlayLiveWell';
var result = text.replace( /([A-Z])/g, " $1" );
var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
console.log(result);