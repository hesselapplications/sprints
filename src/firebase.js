import store from "@/store"
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

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
});

export default {
    tasks: firestore.collection("tasks"),

    async signIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        return await firebase.auth().signInWithPopup(provider);
    },

    async signOut() {
        return await firebase.auth().signOut();
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
        return await collection.doc(id).delete();
    }
}