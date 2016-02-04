import React, { Component } from 'react';
import { connect } from 'react-redux';

import estimationsMock from '../data/estimationsMock';

import { toggleSelection } from '../reducers/estimation';

import EstimationItem from '../components/EstimationItem';
import Debug from '../components/Debug';

function mapStateToProps(state) {
  return {
    estimations: state.estimation,
    totalPrice: state.estimation.reduce((acc, category) => {
      category.map(prop => acc += prop);

      return acc;
    }, 0)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetSelection: (item) => dispatch(toggleSelection(item)),
  };
}

const EstimationWizard = (props) => {
  const { onSetSelection, totalPrice, estimations } = props;

  return (
    <div>
      <div className="fixed top-0 right-0 p2 border bg-red white z4">
        Total Price: { `$${ totalPrice.toFixed(2) }` }
      </div>

      <Debug state={ estimations } />

      <div>
        {
          estimationsMock.map(block => (
            <div key={ block.id } className="border p2">
              <h1>{ block.title }</h1>
              <div>
                {
                  block.options.map(item => (
                    <EstimationItem
                      active={ estimations.hasIn([block.id, item.id]) }
                      key={ item.id }
                      id={ item.id }
                      onClick={ onSetSelection }
                      category={ block.id }
                      value={ item.value }
                      title={ item.label }
                      selectType={ block.select } />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EstimationWizard);
