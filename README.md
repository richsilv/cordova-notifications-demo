cordova-notifications-demo
==========================

Meteor app demonstrating the richsilv:cordova-notifications package

## USAGE

1. Clone this repo.
2. Set up a new GCM API app by following the instructions [here](https://developer.android.com/google/gcm/gs.html) (you can stop before "Next Steps").
3. Update lib/app.js with the SenderID (Project Number) and GCM API Key you generated in step 2.
4. Plug in an Android device via USB and enable USB debugging.
5. Start your app with `meteor run android-device -p [YOUR_IP]:3000` (obviously, replacing [YOUR_IP] with your IP).
6. Navigate to [YOUR_IP]:3000 on your dev machine browser.
7. Set up a user account on either the Android device or the dev machine browser, and log in to the same account on the other (so that you're logged in on both simultaneously).
8. Now you should be able to send push notifications from the browser to your android device.  They will result in either a UI alert (if the application is open in the Android device) or a notifications tray alert (if it's closed).  Note that this is still possible if you unplug the Android device and close the app.
