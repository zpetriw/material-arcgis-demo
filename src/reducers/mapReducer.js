import { 
    MAP_LOAD, 
    LAYER_VISIBILITY_CHANGE 
} from '../actions/mapActions';

import { 
    buildLayers, 
    getBasemap,
    setLayerVisibility,
} from '../services/arcgisService';

const defaultMapReducerState = {
    layers: null,
    basemap: null
}

const mapReducer = (state = defaultMapReducerState, action) => {
    switch (action.type) {

        case MAP_LOAD: 
            return {
                ...state,
                layers: buildLayers(),
                basemap: getBasemap()
            };

        case LAYER_VISIBILITY_CHANGE:
            setLayerVisibility(action.layerTitle, action.visible);
            return {
                ...state,
                layers: buildLayers()
            };

        default:
            return state;
    }
};

export default mapReducer;