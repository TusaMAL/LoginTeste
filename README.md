# Ionic3 Working social login + Firebase

Social login working may have some bugs to fix but at least is working on Android and Windows (from ionic serve -l) and inserting users
data on firebase.

## Email

Email and Password (with validations) working too, planing on inserting password recovery on next update.

## Twitter

`ionic cordova plugin add twitter-connect-plugin --variable FABRIC_KEY=yourkey`

`npm install --save @ionic-native/twitter-connect`

### Tutorial: https://ionicthemes.com/tutorials/about/ionic2-twitter-login

## Facebook

`ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"`

`npm install --save @ionic-native/facebook`

### Tutorial: https://ionicthemes.com/tutorials/about/ionic2-facebook-login

## Google+

`ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid`

`npm install --save @ionic-native/google-plus`

### Tutorial: https://ionicthemes.com/tutorials/about/ionic2-google-login 
