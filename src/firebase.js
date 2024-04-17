import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBWqaztrL4zNtIZJpE3o0FeGTzjIgWCwBI",
    authDomain: "server-1-ceom.onrender.com",
    projectId: "mern-chatapps",
    storageBucket: "mern-chatapps.appspot.com",
    messagingSenderId: "616871615821",
    appId: "1:616871615821:web:9c8e878d03e66c17d6eb04"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export {app,auth,provider}
