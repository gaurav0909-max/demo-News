import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBea0lenCH4lSlcNSP9-yE2xZ45EOKuvEY",
  authDomain: "news-blog-399007.firebaseapp.com",
  projectId: "news-blog-399007",
  storageBucket: "news-blog-399007.appspot.com",
  messagingSenderId: "538291200615",
  appId: "1:538291200615:web:621910850ce047f38d6ac2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
