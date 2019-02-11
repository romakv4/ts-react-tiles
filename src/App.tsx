import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartBar, faHeart, faStar as regFaStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solFaStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Tile from './components/tile/tile';

library.add(solFaStar, regFaStar, faHeart, faChartBar);

class App extends React.Component {

  public render () { 
    return (
      <div className="tiles-list">
        <Tile />
      </div>
    );
      
  }
}

export default App;
