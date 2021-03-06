// Initialize Firebase app with API key of our app
import { initializeApp } from 'firebase/app';

/**
 * API Keys for Firebase Application
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, databaseURL: string, authDomain: string}}
 */
const firebaseConfig = {
    apiKey: "AIzaSyBxDGM7VmgHG-Yvy6LPuKDT3C3JIArHPkg",
    authDomain: "skku-web-chat.firebaseapp.com",
    databaseURL: "https://skku-web-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "skku-web-chat",
    storageBucket: "skku-web-chat.appspot.com",
    messagingSenderId: "1006166323603",
    appId: "1:1006166323603:web:35ac99e8c5e83faa55f866",
};

/**
 * Application reference for accessing Firebase
 * @type {FirebaseApp}
 */
const app = initializeApp(firebaseConfig);

export { app };
