'use strict';

import React from 'react';

require('styles/Header.scss');

let HeaderComponent = (props) => (
  <section idName="header" className="dark">
    	<div>
    		<header>
    			<h1>Partners in Code</h1>
    			<h2 class="under_construction">This site is Under Construction</h2>
    			<p>We are web experts. We will work with you to find the best possible web solution for your needs</p>
    		</header>
    		<footer>
    			<a href="#first" class="button scrolly">Find out how</a>
    		</footer>
    	</div>
    </section>
);

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
