require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
  ], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery, Search) => {
    esriConfig.apiKey = "AAPK024b3d49d5f2465894b2bb830df55a96cNSrLWnwHn544XfeA-MH95T9XKPNNIrscQxH4KmXq32NpL3R8X5_ZdsjCO_GXFAa";
    
    const webMap = new WebMap({
        portalItem: {
            id: "04fb6f3018824b0a872de08e403233a7"
        }
    })

    const view = new MapView({
        container: "viewDiv",
        map: webMap
    })

    const searchWidget = new Search({
        view: view
    })

    view.ui.add(searchWidget, "top-right");

    const homebutton = new Home({
        view: view
    })

    view.ui.add(homebutton, "top-right");
    // view.ui.add("legend-btn", "bottom-left");

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-right");

    // document
    // .getElementById("legend-btn")
    // .addEventListener("click", function() {
    //     toggleButton()
    // })

    // function toggleButton () {
    //     const legendEl = document.getElementsByClassName("esri-legend")[0];
    //     let property;
    //     property = legendEl.style.getPropertyValue("display");

    //     legendEl.style.setProperty("display", property == "block" ? "none" : "block")
    // }

    const scalebar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    })

    view.ui.add(scalebar, "bottom-left");

    view.ui.add("basemap-btn", "top-left");
    view.ui.add("layerList-btn", "top-left");

    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
            query:{

            }
        }
    })

    view.ui.add(basemapGallery, "top-left");
    view.ui.add(basemapToggle, "bottom-right");

    const layerList = new LayerList({
        view: view
    })

    view.ui.add(layerList, "top-left");

    document
    .getElementById("layerList-btn")
    .addEventListener("click", function() {
        toggleButton("layerList")
    })

    document
    .getElementById("basemap-btn")
    .addEventListener("click", function() {
        toggleButton("gallery")
    })

    function toggleButton (item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        let currentProp;



        if(item == "layerList") {
            currentProp = layerListEl.style.getPropertyValue("display");
            layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            galleryEl.style.setProperty("display", "none");
        }else if(item == "gallery") {
            currentProp = galleryEl.style.getPropertyValue("display");
            galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            layerListEl.style.setProperty("display", "none");
        }
    }
})