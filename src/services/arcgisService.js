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
        console.log(view.ui);
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
        console.log(view.ui);
    }).catch((err) => console.error(err));
};