require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HeaderComponent from './HeaderComponent.js';
import ContentComponent from './ContentComponent.js';
import PricingComponent from './PricingComponent.js';
import FooterComponent from './FooterComponent.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent test="hi" />
        <ContentComponent src={yeomanImage} />
        <PricingComponent />
        <FooterComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
