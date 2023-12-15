import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCpcBZMBot6n3kio9OxnzovzQo96CdhwHk",
    authDomain: "recipe-52ed7.firebaseapp.com",
    projectId: "recipe-52ed7",
    storageBucket: "recipe-52ed7.appspot.com",
    messagingSenderId: "555426593756",
    appId: "1:555426593756:web:b59a615bcd5b62b5e12d19" 
}

// init firebase
firebase.initializeApp(firebaseConfig)

// initialize services

const projectFirestore = firebase.firestore()

export {projectFirestore}