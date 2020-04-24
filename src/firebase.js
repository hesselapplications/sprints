import store from "@/store"
import router from "@/router"
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
import _ from "lodash";

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

firebase.auth().onAuthStateChanged(function (user) {
    store.commit('setUser', user);
    if (user) {
        store.dispatch("bindFirestore");

    } else {
        store.dispatch("unbindFirestore");
    }
});

export default {
    tasks: firestore.collection("tasks"),

    async userSignedIn() {
        return new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                unsubscribe();
                var userSignedIn = user != null;
                resolve(userSignedIn);
            }, reject);
        })
    },

    async signIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithRedirect(provider);
    },

    async signOut() {
        await firebase.auth().signOut();
        router.push("sign-in");
    },

    async batchSave(collection, documents) {
        var chunks = _.chunk(documents, 500);
        if (chunks.length == 0) {
            return;
        }

        for (const chunk of chunks) {
            var batch = firestore.batch();
            for (const document of chunk) {
                var id = document.id;
                var ref = id ? collection.doc(id) : collection.doc();
                batch.set(ref, document);
            }

            await batch.commit();
        }
    },

    async saveDocument(collection, document) {
        if (document.id == null) {
            // Add new
            return await collection.add(document);

        } else {
            // Update existing
            var documentReference = collection.doc(document.id);
            delete document.id
            await documentReference.set(document);
            return documentReference;
        }
    },

    async deleteDocument(collection, id) {
        if (id) {
            return await collection.doc(id).delete();
        }
    }
}