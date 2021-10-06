export const environment = {
  production: true
};

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDnFYtkCgi6EwnTrVbAd4tvxeK_PWoZUjo',
  authDomain: 'aditya-portfolio-60f46.firebaseapp.com',
  databaseURL: 'https://aditya-portfolio-60f46-default-rtdb.firebaseio.com',
  projectId: 'aditya-portfolio-60f46',
  storageBucket: 'aditya-portfolio-60f46.appspot.com',
  messagingSenderId: '138182139394',
  appId: '1:138182139394:web:81076b2816f2dc2df5d11b',
  measurementId: 'G-8WSHPTBJES'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
