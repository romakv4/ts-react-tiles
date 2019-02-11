import React from 'react';
import ProductData from '../../data/productData.json';
import Buttons from './buttons/buttons';
import LogisticInfo from './logistic-info/logisticInfo';
import ProductInfo from './product-info/productInfo';
import './tile.css';

class Tile extends React.Component {

    private imagePath: string;

    public createTilesArray = () => {

        const tilesArray: any = [];

        for (const product of ProductData.products) {

            this.imagePath = product.imagePath;

            tilesArray.push (
                <div className="tile">
                    <img src={this.imagePath} alt="" className="tile__picture" />
                    <ProductInfo description={product.description} specs={product.specs} rating={product.rating} price={product.price} valute={product.valute}/>
                    <Buttons/>
                    <LogisticInfo inStock={product.inStock} shipping={product.shipping}/>
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