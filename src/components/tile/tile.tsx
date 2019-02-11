
import React from 'react';
import ProductData from '../../data/productData.json';
import Buttons from './buttons/buttons';
import LogisticInfo from './logistic-info/logisticInfo';
import ProductInfo from './product-info/productInfo';
import './tile.css';


class Tile extends React.Component {

    public createTilesArray = () => {

        const tilesArray:any = [];

        for (const product of ProductData.products) {
            tilesArray.push (
                <div className="tile">
                    <img src={product.imagePath} alt="" className="tile__picture" />
                    <ProductInfo data={product}/>
                    <Buttons/>
                    <LogisticInfo data={product}/>
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