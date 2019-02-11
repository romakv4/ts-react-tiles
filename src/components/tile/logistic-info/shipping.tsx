import React from 'react';

export interface IShipping {
    shipping: string;
}

class Shipping extends React.Component<IShipping> {
    
    public render () {
        return (
            <div className="tile__logistic-info_delivery top-margin lefter">
                Доставим: <a href="#">{this.props.shipping}</a>
            </div>
        );
    }
}

export default Shipping;