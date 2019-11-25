import React from 'react';
import { render } from 'react-dom';
import LocationDetails from './location-details';
import PropTypes from 'prop-types';

const App = props => (
  <LocationDetails city={props.location.city} country={props.location.country} />
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
