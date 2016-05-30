'use strict';

import React from 'react';

require('styles//Pricing.scss');

class PricingComponent extends React.Component {
  render() {
    return (
      <section className="main">
        <header>
          <div className="container">
            <h2>Euismod sed feugiat lorem tempus magna</h2>
            <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
            feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
          </div>
        </header>
        <div id="second" className="content dark style2">
          <section className="container">
            <div className="row">
              <div className="3u 12u(narrow)">
                  <ul className="pricing p-green">
                    <li>
                      <i className="fa fa-cog" aria-hidden="true"></i>
                      <big>Start</big>
                    </li>
                    <li>Responsive Design</li>
                    <li>Color Customization</li>
                    <li>HTML5 & CSS3</li>
                    <li>Styled elements</li>
                    <li>
                      <h3>$199</h3>
                      <span>per month</span>
                    </li>
                    <li>
                      <button>Join Now</button>
                    </li>
                  </ul>
              </div>

              <div className="3u 12u(narrow)">
                  <ul className="pricing p-yel">
                    <li>
                      <i className="fa fa-cogs" aria-hidden="true"></i>
                      <big>Good</big>
                    </li>
                    <li>Responsive Design</li>
                    <li>Color Customization</li>
                    <li>HTML5 & CSS3</li>
                    <li>Styled elements</li>
                    <li>
                      <h3>$299</h3>
                      <span>per month</span>
                    </li>
                    <li>
                      <button>Join Now</button>
                    </li>
                  </ul>
              </div>

              <div className="3u 12u(narrow)">
                  <ul className="pricing p-red">
                    <li>
                      <i className="fa fa-code" aria-hidden="true"></i>
                      <big>Ultima</big>
                    </li>
                    <li>Responsive Design</li>
                    <li>Color Customization</li>
                    <li>HTML5 & CSS3</li>
                    <li>Styled elements</li>
                    <li>
                      <h3>$399</h3>
                      <span>per month</span>
                    </li>
                    <li>
                      <button>Join Now</button>
                    </li>
                  </ul>
              </div>

              <div className="3u 12u(narrow)">
                  <ul className="pricing p-blue">
                    <li>
                      <i className="fa fa-bolt" aria-hidden="true"></i>
                      <big>Vip</big>
                    </li>
                    <li>Responsive Design</li>
                    <li>Color Customization</li>
                    <li>HTML5 & CSS3</li>
                    <li>Styled elements</li>
                    <li>
                      <h3>$799</h3>
                      <span>per month</span>
                    </li>
                    <li>
                      <button>Join Now</button>
                    </li>
                  </ul>
              </div>
            </div><!-- /row -->
          </section>
        </div>
      </section>
    );
  }
}

PricingComponent.displayName = 'PricingComponent';

// Uncomment properties you need
// PricingComponent.propTypes = {};
// PricingComponent.defaultProps = {};

export default PricingComponent;
