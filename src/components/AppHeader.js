import React from 'react';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Logo from './Logo';

const styles = theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    flex: {
      flex: 1,
      textAlign: "center"
    },
  });

const AppHeader = props => {
    return (
        <AppBar position="absolute" className={props.classes.appBar}>
            <Toolbar>
                <Logo />
                <Typography variant="title" color="inherit" noWrap className={props.classes.flex}>
                    Material UI ArcGIS Demo
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(AppHeader);

