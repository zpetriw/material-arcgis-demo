import { esriPromise } from 'react-arcgis';

let map;
let view;

export const initializeArcGisMap = (mapValue, viewValue) => {
    map = mapValue;
    view = viewValue;

    setUpMapViewWidgets();
}

// Load the components as promises.
const setUpMapViewWidgets = () => {
    esriPromise(['esri/widgets/BasemapToggle', 'esri/widgets/ScaleBar', 'esri/widgets/Compass']).then(([ BasemapToggle, ScaleBar, Compass ]) => {
        var toggle = new BasemapToggle({
            view: view,
            nextBasemap: 'satellite'
        });
        view.ui.add(toggle, "bottom-right");

        var scaleBar = new ScaleBar({
            view: view
        });
        view.ui.add(scaleBar, "bottom-left");

        var compass = new Compass({
            view: view
        });
        view.ui.add(compass, "top-left");

    }).catch((err) => console.error(err));
};

export const buildLayers = () => {
    const layers = [];
    map.layers.items.forEach(item => {
        layers.push({
            title: item.title,
            visible: item.visible
        });
    });
    return layers;
};

// Get the title of the current basemap. 
export const getBasemap = () => {
    return map.basemap.title;
};

// Change the basemap to the supplied one.
export const changeBasemap = (basemap) => {
    map.basemap = basemap;
};

export const setLayerVisibility = (layerTitle, visible) => {
    const layer = map.layers.items.find(item => item.title === layerTitle);
    layer.visible = visible;
};