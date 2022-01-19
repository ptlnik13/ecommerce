import React from 'react';
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selector";
import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from "./collection.styles";

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>{
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }</CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps); // well you can write any name this property we get from its own component.(since "CollectionPage" has rendered in "shop" component's route, so we get route props.
    return ({
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    })
}

export default connect(mapStateToProps)(CollectionPage);