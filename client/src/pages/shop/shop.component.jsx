import React, {useEffect} from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import {useDispatch} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

const ShopPage = ({match}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch])

    return (<div className='shop-page'>
        <Route exact path={match.path} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
    </div>)
}

export default ShopPage;