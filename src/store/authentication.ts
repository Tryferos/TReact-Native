import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {create} from 'zustand';
import auth from '@react-native-firebase/auth';

type AuthenticationState = {
  init: () => void;
  signInWithGoogle: () => Promise<boolean>;
  signOut: () => Promise<void>;
} & (
  | {
      user: FirebaseAuthTypes.User;
      idToken: string;
    }
  | {
      user: null;
      idToken: null;
    }
);

export const useUserAuthentication = create<AuthenticationState>(set => ({
  user: null,
  idToken: null,
  signInWithGoogle: async () => {
    try {
      const {idToken: token} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(token);
      const userCredentials = await auth().signInWithCredential(
        googleCredential,
      );
      const idToken = await userCredentials.user.getIdToken();
      set({user: userCredentials.user, idToken: idToken});
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  signOut: async () => {
    //! Using firebase auth to sign out signs out simply the user
    //! next time the user tries to sign in he will be signed in automatically
    // await auth().signOut();
    //! Using Google sign out signs out the user completely, so
    //! next time the user tries to sign in he will be prompted to sign in and choose an account
    await GoogleSignin.signOut();
    set({user: null, idToken: null});
  },
  init: () => {
    GoogleSignin.configure({
      webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
    });
  },
}));
