import { auth } from './firebase';

export async function signUpEmail(email: string, password: string) {
  const { user } = await auth().createUserWithEmailAndPassword(email, password);
  return user;
}

export async function signInEmail(email: string, password: string) {
  const { user } = await auth().signInWithEmailAndPassword(email, password);
  return user;
}

export function onAuth(cb: (user: any | null) => void) {
  return auth().onAuthStateChanged(cb);
}


// PHONE AUTH
export async function startPhoneSignIn(e164Phone: string) {
  // Returns a ConfirmationResult used to confirm the OTP
  return auth().signInWithPhoneNumber(e164Phone);
}

export async function confirmCode(confirm: any, code: string) {
  const credUser = await confirm.confirm(code);
  return credUser;
}

export async function signOut() { return auth().signOut(); }
export async function getIdToken(forceRefresh = false) {
  return auth().currentUser?.getIdToken(forceRefresh);
}

