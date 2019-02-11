import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export interface IProductRating {
    rating: number;
}

class ProductRating extends React.Component<IProductRating> {
    
    public render () {
        return (
            <div className="tile__info_rating top-margin lefter">
                {this.getRatingStars(this.props.rating)}
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

export default ProductRating;