// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

export const environment = {
  production: false
};

const firebaseConfig = {
  apiKey: 'AIzaSyDnFYtkCgi6EwnTrVbAd4tvxeK_PWoZUjo',
  authDomain: 'aditya-portfolio-60f46.firebaseapp.com',
  projectId: 'aditya-portfolio-60f46',
  storageBucket: 'aditya-portfolio-60f46.appspot.com',
  messagingSenderId: '138182139394',
  appId: '1:138182139394:web:81076b2816f2dc2df5d11b',
  measurementId: 'G-8WSHPTBJES'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
