<<<<<<< HEAD
import React, {useEffect, lazy, Suspense} from "react";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverview = lazy(() => import("../../components/collections-overview/collections-overview.component"))
const CollectionPageContainer = lazy(() => import("../collection/collection.container"));
=======
import React, {useEffect} from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import {useDispatch} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
>>>>>>> 2d363507030e6d8c1ba181d42f2025d26f9067f5

const ShopPage = ({match}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch])

    return (<div className='shop-page'>
<<<<<<< HEAD
        <Suspense fallback={<Spinner/>}>
            <Route exact path={match.path} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </Suspense>
=======
        <Route exact path={match.path} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
>>>>>>> 2d363507030e6d8c1ba181d42f2025d26f9067f5
    </div>)
}

export default ShopPage;