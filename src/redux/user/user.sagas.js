import {takeLatest, put, all, call} from "redux-saga/effects";
import userActionTypes from "./user.type";
import {auth, googleProvider, createUserProfileDocument} from "../../firebase/firebase.utils";
import {signInFailure, signInSuccess} from "./user.action";


export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data}))
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        put(signInFailure(e.message));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}