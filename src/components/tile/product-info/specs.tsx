import React from 'react';


export interface IProductSpecs {
    specs: string;
}

class ProductSpecs extends React.Component<IProductSpecs> {
    
    public render () {
        return (
            <div className="tile__info_specs top-margin lefter">
                {this.props.specs}
            </div>
        );
    }
}

export default ProductSpecs;