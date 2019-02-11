import React from 'react';


export interface IProductImage {
    imagePath: string;
}

class ProductImage extends React.Component<IProductImage> {
    
    public render () {
        return (
            <img src={this.props.imagePath} alt="" className="tile__picture" />      
        );
    }
}

export default ProductImage;