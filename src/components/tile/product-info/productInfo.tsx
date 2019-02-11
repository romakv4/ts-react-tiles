import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export interface IProductInfo {data: any;}

class ProductInfo extends React.Component<IProductInfo> {
    
    public render () {
        return (
            <div className="tile__info">
                <div className="tile__info_description top-margin">
                    {this.props.data.description}
                </div>
                <div className="tile__info_specs top-margin">
                    {this.props.data.specs}
                </div>
                <div className="tile__info_rating top-margin">
                    {this.getRatingStars(this.props.data.rating)}
                </div>
                <div className="tile__info_price top-margin">
                    {this.props.data.price} {this.props.data.valute}
                </div>
            </div>
        );
    }

    private getRatingStars = (rating : number) => {

        const productRating = [];
    
        for (let i = 0; i < rating; i++) {
            productRating.push (<FontAwesomeIcon icon={['fas', 'star']}/>);
        }
        for (let i = 0; i < 5-rating; i++) {
            productRating.push (<FontAwesomeIcon icon={['far', 'star']}/>);
        }
    
        return productRating;
    }
}

export default ProductInfo;