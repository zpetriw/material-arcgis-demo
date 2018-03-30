export const MAP_LOAD = 'MAP_LOAD';
export const BASEMAP_CHANGE = 'BASEMAP_CHANGE';
export const LAYER_VISIBILITY_CHANGE = 'LAYER_VISIBILITY_CHANGE';

export const loadMap = () => ({
    type: MAP_LOAD
});

export const changeBasemap = (basemap) => ({
    type: BASEMAP_CHANGE,
    basemap
});

export const changeLayerVisibility = (layerTitle, visible) => ({
    type: LAYER_VISIBILITY_CHANGE,
    layerTitle,
    visible
});