import React, {Component} from 'react';

import * as appActions from './actions';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';

import Arms from './components/Arms';
import PartForm from './components/PartForm';
import styles from './app.module.scss';

class App extends Component {

  render () {
    const {parts, actions} = this.props;
    const root = parts.root;

    return (
      <div className={styles.blasonContainer}>
      <Arms armsParts={parts} />
      <PartForm actions={actions} armsParts={parts} part={root} />
      </div>
    );
  }
}

/**
 * Map all our state to the application
 *
 * @param  {Object} state state of our application
 * @return {Object} props
 */
function mapStateToProps (state) {
  return {...state};
}

/**
 * Map all our actions to dispatch
 *
 * @param  {Object} dispatch store dispatch function
 * @return {Object} actions
 */
function mapDispatchToProps (dispatch) {
  return {
    'actions': bindActionCreators(appActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
