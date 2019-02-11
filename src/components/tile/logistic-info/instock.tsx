import React from 'react';

export interface IInStock {
    inStock: string;
}

class InStock extends React.Component<IInStock> {
    
    public render () {
        return (
            <div className="tile__logistic-info_inshop top-margin lefter">
                В наличии: <a href="#">{this.props.inStock}</a>
            </div>
        );
    }
}

export default InStock;