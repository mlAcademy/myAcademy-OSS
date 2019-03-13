import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

import { firebaseConfig as config } from '../assets/config';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  async doCreateUser(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  doSignIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    return this.auth.signOut();
  }

  doPasswordReset(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate(password) {
    return this.auth.currentUser.updatePassword(password);
  }
}

export default Firebase;
