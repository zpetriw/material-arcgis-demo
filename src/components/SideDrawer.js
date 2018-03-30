import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import { toggleSidebar } from '../actions/appActions';
import { drawerWidth } from '../constants/style';
import Divider from 'material-ui/Divider';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import FilterList from 'material-ui-icons/FilterList';
import Search from 'material-ui-icons/Search';
import Grid from 'material-ui-icons/GridOn';
import LayersTab from './LayersTab';

function TabContainer ({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    button: {
        marginLeft: 12,
        marginRight: 20,
    },
    tab: {
        minWidth: 72,
    },
});

class SideDrawer extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {

        const { classes, sidebarVisible, toggleSidebar } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Drawer
                    variant="persistent"
                    anchor="right"
                    open={sidebarVisible}
                    classes={{paper: classes.drawerPaper,}}
                >
                <div className={classes.drawerHeader}>
                <IconButton onClick={toggleSidebar} className={classes.button}>
                    <ChevronLeftIcon/>
                </IconButton>
                </div>
                <Divider />
                <Tabs
                    className={classes.tab}
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                >
                    <Tab label="Layers" icon={<MenuIcon/>} classes={{ root: classes.tab }}/>
                    <Tab label="Filters" icon={<FilterList/>} classes={{ root: classes.tab }}/>
                    <Tab label="Query" icon={<Search/>} classes={{ root: classes.tab }}/>
                    <Tab label="Basemap" icon={<Grid/>} classes={{ root: classes.tab }}/>
                </Tabs>
                <Divider />
                {value === 0 && <TabContainer> <LayersTab/> </TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
                {value === 3 && <TabContainer>Item Four</TabContainer>}
            </Drawer>
        </div>
        );
    };
};

SideDrawer.propTypes = {
    sidebarVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        sidebarVisible: state.app.sidebarVisible
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, {toggleSidebar})
)(SideDrawer);