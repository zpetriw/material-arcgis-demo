import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { changeLayerVisibility } from '../actions/mapActions';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
});

const LayersTab = ({ classes, layers, changeLayerVisibility }) => {

    const renderContent = () => {
        if(!layers) {
            return (
                <div>Map is not loaded</div>
            );
        }

        return (
            <div className={classes.root}>
                <List>
                    {layers.map(layer => (
                        <ListItem
                        key={layer.title}
                        role={undefined}
                        dense
                        button
                        onClick={() => changeLayerVisibility(layer.title, !layer.visible)}
                        className={classes.listItem}
                        >
                        <Checkbox
                            checked={layer.visible}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={layer.title} />
                        </ListItem>
                ))}
                </List>
            </div>
        );
    };

    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                <Typography variant="title" color="inherit">
                    Layers
                </Typography>
                </Toolbar>
            <Divider />
            {renderContent()}
            </AppBar>
        </div>
    );
};

LayersTab.propTypes = {
    classes: PropTypes.object.isRequired,
    layers: PropTypes.array,
};

const mapStateToProps = ({map}) => {
    return {
        layers: map.layers
    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, {changeLayerVisibility})
)(LayersTab);