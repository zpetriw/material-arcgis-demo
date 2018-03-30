import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../src/components/Header';
import MapContainer from '../src/components/MapContainer';
import { headerHeight } from '../src/constants/style';
import SideDrawer from '../src/components/SideDrawer';
import { drawerWidth } from '../src/constants/style';

// content: {
//   width: '100%',
//   // Width must be declared or it collapses to zero.
//   // Don't declare a height if you want it to auto-fit the remaining space!
//   marginTop: headerHeight,
// }

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    //padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: headerHeight,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

const App = ({classes, sidebarVisible}) => {
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header />
        <main
            className={classNames(classes.content, classes['content-right'], {
              [classes.contentShift]: sidebarVisible,
              [classes['contentShift-right']]: sidebarVisible,
            })}
        >
          <MapContainer />
        </main>
          <SideDrawer />
      </div>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  sidebarVisible: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
      sidebarVisible: state.app.sidebarVisible
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, null)
)(App);
