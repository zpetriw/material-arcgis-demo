import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Header from '../src/components/AppHeader';
import MapContainer from '../src/components/MapContainer';
import { headerHeight } from '../src/constants/style';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    width: '100%',
    // Don't declare a height if you want it to auto-fit the remaining space!
    marginTop: headerHeight,
  }
});

const App = props => {
  return (
    <div className={props.classes.root}>
      <Header />
      <div className={props.classes.content}>
        <MapContainer />
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);