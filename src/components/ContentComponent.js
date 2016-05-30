'use strict';

import React from 'react';

require('styles//Content.scss');

let ContentComponent = (props) => (
  <section className="main">
    <header>
      <div className="container">
        <h2>Tessellate is a free responsive site template</h2>
        <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
        feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
      </div>
    </header>
    <div id="first" className="content dark style1 featured">
      <div className="container">
        <div className="row">
          <div className="4u 12u(narrow)">
            <section>
              <span className="feature-icon"><span className="icon fa-html5"></span></span>
              <header>
                <h3>Gravida</h3>
              </header>
              <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
              Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
              ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
              accumsan vivamus.</p>
            </section>
          </div>
          <div className="4u 12u(narrow)">
            <section>
              <span className="feature-icon"><span className="icon fa-css3"></span></span>
              <header>
                <h3>Vivamus</h3>
              </header>
              <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
              Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
              ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
              accumsan vivamus.</p>
            </section>
          </div>
          <div className="4u 12u(narrow)">
            <section>
              <span className="feature-icon"><span className="icon fa-cloud"></span></span>
              <header>
                <h3>Accumsan</h3>
              </header>
              <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
              Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
              ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
              accumsan vivamus.</p>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="12u">
            <footer>
              <a href="#second" className="button scrolly">Gravida tempor lacinia</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
);

ContentComponent.displayName = 'ContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
// ContentComponent.defaultProps = {};

export default ContentComponent;
