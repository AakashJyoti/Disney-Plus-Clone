import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo6sH76waNRK1It0xuq1WnkdFvOyr7FVI",
  authDomain: "disney-plus-clone-redux.firebaseapp.com",
  projectId: "disney-plus-clone-redux",
  storageBucket: "disney-plus-clone-redux.appspot.com",
  messagingSenderId: "711355353213",
  appId: "1:711355353213:web:54255b25ab2476ec178914",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider, storage };
export default db;
