'use strict';

require('../styles/main.scss');
require('../styles/font-awesome.min.css');

import React from 'react';

require('styles//Footer.scss');

let FooterComponent = (props) => (
  <section id="footer">
		<ul class="icons">
      <li>
        <a href="https://github.com/WebRuin" class="icon fa-github"></a>
      </li>

      <li>
        <a href="https://facebook.com/tim.smith" class="icon fa-facebook"></a>
      </li>

      <li>
        <a href="https://twitter.com/timsmith23" class="icon fa-twitter"></a>
      </li>
		</ul>
		<div class="copyright">
			<ul class="menu">
				<li>&copy; 2016 Webruin - All rights reserved.</li><li>Design: Tim Smith - <a href="https://www.facebook.com/partners.in.code/">Partners In Code</a></li>
			</ul>
		</div>
	</section>
);

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
