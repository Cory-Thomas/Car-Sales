import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { removeFeature } from './actions';

const App = ({ car, additionalFeatures, additionalPrice }) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={ car } />
        <AddedFeatures car={ car } removeFeature={ removeFeature } />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={ additionalFeatures } />
        <Total car={ car } additionalPrice={ additionalPrice } />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect( mapStateToProps, { removeFeature } )( App );