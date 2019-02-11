import React from 'react';


export interface IProductPrice {
    price: number;
    valute: string;
}

class ProductPrice extends React.Component<IProductPrice> {
    
    public render () {
        return (
            <div className="tile__info_price top-margin lefter">
                {this.props.price} {this.props.valute}
            </div>
        );
    }
}

export default ProductPrice;