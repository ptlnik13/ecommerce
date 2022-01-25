import React from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import {Route} from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import {connect} from "react-redux";
import {fetchCollectionStartAsync} from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();
    }

    render() {
        const {match} = this.props;
        return (<div className='shop-page'>
            <Route exact path={match.path} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
export default connect(null, mapDispatchToProps)(ShopPage);