import { db } from "../_utils/firebase";
import { 
    collection,
    setDoc, 
    getDocs, 
    getDoc, 
    addDoc, 
    query, 
    doc,
    where } from "firebase/firestore";


    // method to get log from db, it fetchs the log based on the LogId passed as parameter
export const getLog = async (LogId) =>{
    try {
        const docRef = doc(db, "logs", LogId) // document reference
        const docSnap = await getDoc(docRef); // get a document snapshot

        if (docSnap.exists) {
            const log = {id: docSnap.id, ...docSnap.data() };
            return log
        } else {
            return { id: null, 
                 name: '',
                 date: '',
                 truckNumber: '',
                 trailerNumber: '',
                 odometerStart: '',
                 odometerEnd: ''}
            }
        } catch (err) {
            console.log("error in getLog: " + err)
        }
    }

    // get all logs stored in the database and return it
export const getAllLog = async()=> {
    try {
        const querySnapShot = await getDocs(collection(db,"logs")) 
        const logs = querySnapShot.docs.map(doc=> ({
            id: doc.id, 
            ...doc.data()
        }))
        return logs
    } catch (err) {
        console.log("error in getAllLog: " + err)
        return [];
    }
}


    // add a log in the db, receive log and driveInfo as parameter and save it on the database
    export const addLog = async (log, driverInfo) => {
        console.log("Adding log:", log);
        await addDoc(collection(db, "logs"), {
          name: driverInfo.name,
          date: driverInfo.date,
          truckNumber: driverInfo.truckNumber,
          trailerNumber: driverInfo.trailerNumber,
          odometerStart: driverInfo.odometerStart,
          odometerEnd: driverInfo.odometerEnd,
          time: log.time,
          activity: log.activity,
          location: log.location,
          remarks: log.remarks
        });
      }
      