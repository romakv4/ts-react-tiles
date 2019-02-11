import React from 'react';


export interface IProductDescription {
    description: string;
}

class ProductDescription extends React.Component<IProductDescription> {
    
    public render () {
        return (
            <div className="tile__info_description top-margin lefter">
                {this.props.description}
            </div>
        );
    }
}

export default ProductDescription;