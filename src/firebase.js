import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBtKCOe8kZA6Np_oxc_Q0uiRICvn-GiktM",
  authDomain: "subtasker-e48dd.firebaseapp.com",
  databaseURL: "https://subtasker-e48dd.firebaseio.com",
  projectId: "subtasker-e48dd",
  storageBucket: "subtasker-e48dd.appspot.com",
  messagingSenderId: "551837714427",
  appId: "1:551837714427:web:75d289671253f23040ad5e",
  measurementId: "G-3RKSZZJLT7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore = firebase.firestore();

export default {
    tasks: firestore.collection("tasks"),

    getCurrentTimestamp() {
        return firebase.firestore.Timestamp.fromDate(new Date());
    },

    getDocument(document) {
        return new Promise(
            function (resolve, reject) {
                document.get().then(function (documentSnapshot) {
                    if (documentSnapshot.exists) {
                        var data = documentSnapshot.data();
                        Object.defineProperty(data, 'id', {
                            value: documentSnapshot.id,
                            writable: false
                        });

                        resolve(data);
                    } else {
                        var error = new Error(`Document ${documentSnapshot.ref.path} does not exist.`);
                        reject(error);
                    }
                })
            }
        );
    },

    async saveDocument(collection, document) {
        var documentReference;
        if (document.id == null) {
            // Add new
            documentReference = await collection.add(document);

        } else {
            // Update existing
            documentReference = collection.doc(document.id);
            documentReference.set(document);
        }

        return documentReference;
    },

    deleteDocument(collection, id) {
        return collection.doc(id).delete();
    }
}
