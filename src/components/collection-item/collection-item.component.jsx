import React from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import {
    CollectionItemContainer,
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='background-image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton className='add-button' onClick={() => dispatch(addItem(item))}>Add to Cart</AddButton>
        </CollectionItemContainer>
    )
};

export default CollectionItem;