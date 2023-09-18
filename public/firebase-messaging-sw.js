// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyChwFUsXAFcHonV-RRyKtNNM6cykJJKJfs",
  authDomain: "nextjs-pwa-demo.firebaseapp.com",
  projectId: "nextjs-pwa-demo",
  storageBucket: "nextjs-pwa-demo.appspot.com",
  messagingSenderId: "639198511939",
  appId: "1:639198511939:web:262ae4261793f66d0025f6",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
