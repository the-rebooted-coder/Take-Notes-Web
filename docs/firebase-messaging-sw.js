importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBnGT7GqWAHz50m39I3_WgIiKlLCWPixdE",
    authDomain: "take-notes-7efb5.firebaseapp.com",
    databaseURL: "https://take-notes-7efb5.firebaseio.com",
    projectId: "take-notes-7efb5",
    storageBucket: "take-notes-7efb5.appspot.com",
    messagingSenderId: "720040417053",
    appId: "1:720040417053:web:91a9c50654844f5339f3f4",
    measurementId: "G-W8YZF96TCF"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
