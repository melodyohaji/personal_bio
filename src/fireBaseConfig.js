import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyDh9G_Y7amNfj-eNl_H9QAplnh3Tv2rLAQ",
    authDomain: "blog-f9184.firebaseapp.com",
    databaseURL: "https://blog-f9184.firebaseio.com",
    projectId: "blog-f9184",
    storageBucket: "blog-f9184.appspot.com",
    messagingSenderId: "1044531503970"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}