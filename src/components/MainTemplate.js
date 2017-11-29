import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <section>
        {children}
      </section>
      <footer>
        This is the footer
      </footer>
    </div>
  );
}

// MainTemplate.propTypes = {
//   : PropTypes.
// };

export default MainTemplate;
