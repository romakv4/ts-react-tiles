import React from 'react';

export interface ILogisticInfo {
    inStock: string;
    shipping: string;
}

class LogisticInfo extends React.Component<ILogisticInfo> {
    
    public render () {
        return (
            <div className="tile__logistic-info">
                <div className="tile__logistic-info_inshop top-margin lefter">
                    В наличии: <a href="#">{this.props.inStock}</a>
                </div>
                <div className="tile__logistic-info_delivery top-margin lefter">
                    Доставим: <a href="#">{this.props.shipping}</a>
                </div>
            </div>
        );
    }
}

export default LogisticInfo;