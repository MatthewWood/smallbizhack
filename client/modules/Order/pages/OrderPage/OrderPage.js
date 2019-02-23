import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export function OrderPage(props) {
  return (
    <div>
      "Hello!"
    </div>
  );
}

// Functions which are needed, this is also needed
OrderPage.need = [params => {[]}];

// OrderPage.propTypes = {
//   Order: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default OrderPage;
