require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home"
  ], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home) => {
    esriConfig.apiKey = "AAPK024b3d49d5f2465894b2bb830df55a96cNSrLWnwHn544XfeA-MH95T9XKPNNIrscQxH4KmXq32NpL3R8X5_ZdsjCO_GXFAa";
    
    const webMap = new WebMap({
        portalItem: {
            id: "04fb6f3018824b0a872de08e403233a7"
        }
    })

    const view = new MapView({
        container: "viewDiv",
        map: webMap
    });

    const homebutton = new Home({
        view: view
    })

    view.ui.add(homebutton, "top-left")

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-right")

    const scalebar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    })

    view.ui.add(scalebar, "bottom-left")
})