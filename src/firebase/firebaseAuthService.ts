import {
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import type {LoginData, RegisterData} from "../utils/shop-types.ts";
import {auth} from "../configurations/firebase-config.ts";


const loginWithEmail = async (data: LoginData) => {
    const result = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = result.user;
    console.log(user);
    return {email: data.email, name: user.displayName || "User"};
}

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(auth.currentUser);
    return Promise.resolve({email: user.email, name: user.displayName});
}

export const login = async (data: LoginData) => {
    return data.email === "GOOGLE" ? loginWithGoogle() : loginWithEmail(data)
}

export const registerWithEmailAndPassword = async (data: RegisterData) => {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
    const user = userCredential.user;
    console.log(user);
    await updateProfile(user, {displayName: data.name})
    return data.email;
}

export const exit = async () => {
    await signOut(auth);
}