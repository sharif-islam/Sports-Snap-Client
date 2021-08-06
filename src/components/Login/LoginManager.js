import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLogInFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */

      // This gives you a Google Access Token. You can use it to access the Google API.

      // The signed-in user info.
      var user = result.user;
      const { displayName, photoURL, email } = user;
      const signInUser = {
        isSignIn: true,
        name: displayName,
        photo: photoURL,
        email: email,
        success: true,
      };
      return signInUser;

      // ...
    })
    .catch((error) => {
      console.log("error");
    });
};

export const handleGoogleSignOut = () => {
  console.log("SignOut Clicked...");
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signInUser = {
        isSignIn: false,
        name: "",
        email: "",
        password: "",
        photo: "",
      };
      return signInUser;
    })
    .catch((err) => {
      console.log("signOut Error", err);
    });
};
