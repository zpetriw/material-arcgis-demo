import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Header from '../src/components/AppHeader';
import MapContainer from '../src/components/MapContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

const App = props => {
  return (
    <div className={props.classes.root}>
      <Header />
      <MapContainer />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);