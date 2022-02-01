import {takeLatest, call, put} from 'redux-saga/effects';
import ShopActionTypes from "./shop.type";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionFailure, fetchCollectionSuccess} from "./shop.actions";


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (e) {
        yield put(fetchCollectionFailure(e.message));
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync); // This code only fires when it listens for fetch collections start action.
}
