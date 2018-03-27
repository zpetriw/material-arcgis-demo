import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
//import { connect } from 'react-redux';
import { WebMap } from 'react-arcgis';
import { webmapId } from '../constants';
import { initializeArcGisMap } from '../services/arcgisService';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
  });

class MapContainer extends Component {

    handleMapLoad = (map, view) => {
        
        // The following line passes map and view to the service directly, bypassing action and reducer.
        // this is done to avoid passing map and view as action parameters. The ArcGIS "WebMap" class
        // does not support toJSON, which can cause redux development tool to crash.
        initializeArcGisMap(map, view);
        // this.props.loadMap();
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <WebMap id={webmapId} onLoad={this.handleMapLoad} onFail={e => console.log(e)} />
            </div>
        )
    }
}    

export default withStyles(styles)(MapContainer);