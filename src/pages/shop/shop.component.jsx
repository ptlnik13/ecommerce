import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {connect} from "react-redux";
import {fetchCollectionStartAsync} from "../../redux/shop/shop.actions";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();
    }

    render() {
        const {match, isCollectionsLoaded} = this.props;
        return (<div className='shop-page'>
            <Route exact path={match.path} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded}{...props}/>}/>
        </div>)
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);