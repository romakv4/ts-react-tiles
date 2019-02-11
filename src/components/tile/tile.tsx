import React from 'react';
import ProductData from '../../data/productData.json';
import Buttons from './buttons/buttons';
import LogisticInfo from './logistic-info/logisticInfo';
import Description from './product-info/description';
import Image from './product-info/image';
import Price from './product-info/price';
import Rating from './product-info/rating';
import Specs from './product-info/specs';
import './tile.css';

class Tile extends React.Component {

    public createTilesArray = () => {

        const tilesArray: any = [];

        for (const product of ProductData.products) {

            tilesArray.push (
                <div className="tile">
                    <div className="tile__info">
                        <Image imagePath = {product.imagePath}/>
                        <Description description = {product.description}/>
                        <Specs specs = {product.specs}/>
                        <Rating rating = {product.rating}/>
                        <Price price = {product.price} valute={product.valute}/>
                    </div>
                    <Buttons/>
                    <LogisticInfo inStock = {product.inStock} shipping = {product.shipping}/>
                </div>
            );
        }
        return tilesArray;
    }

    public render () {
        return (
            this.createTilesArray()
        );
    }
}

export default Tile;