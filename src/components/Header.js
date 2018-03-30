import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Logo from './Logo';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { toggleSidebar } from '../actions/appActions';
import { drawerWidth } from '../constants/style';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'content-right': {
        marginRight: drawerWidth,
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    title: {
        flex: 1,
        textAlign: 'center',
    }
});

const AppHeader = ({ classes, sidebarVisible, toggleSidebar }) => {
    return (
        // We conditionally apply the 'appBarShift' class only if the drawer is currently open.
        <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: sidebarVisible,
              [classes['content-right']]: sidebarVisible
            })}
          >
            <Toolbar disableGutters={true} >
                <Logo />
                <Typography 
                    variant="title" 
                    color="inherit" 
                    noWrap 
                    className={classes.title}
                >
                    Material UI ArcGIS Demo
                </Typography>
                <Tooltip id="toggleSidebar-tooltip" title="Toggle Sidebar" placement="bottom">
                    <IconButton 
                        color="inherit" 
                        onClick={toggleSidebar}
                        className={classNames(classes.menuButton, sidebarVisible && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    sidebarVisible: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        sidebarVisible: state.app.sidebarVisible
    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, {toggleSidebar})
)(AppHeader);

