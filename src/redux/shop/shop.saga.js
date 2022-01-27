import {takeEvery, call, put} from 'redux-saga/effects';
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
    // below we were using for Thunk
    // const collectionRef = firestore.collection('collections');
    // dispatch(fetchCollectionsStart());
    // collectionRef.get().then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
