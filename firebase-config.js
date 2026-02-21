const firebaseConfig = {
apiKey: "COLOQUE_SUA_APIKEY",
authDomain: "SEU_PROJETO.firebaseapp.com",
projectId: "SEU_PROJETO",
storageBucket: "SEU_PROJETO.appspot.com",
messagingSenderId: "SEU_MESSAGING",
appId: "SEU_APPID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();