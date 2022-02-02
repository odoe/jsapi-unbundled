import esriConfig from "@arcgis/core/config.js";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import Bookmarks from "@arcgis/core/widgets/Bookmarks.js";
import Expand from "@arcgis/core/widgets/Expand.js";

esriConfig.assetsPath = "./node_modules/@arcgis/core/assets";

const webmap = new WebMap({
  portalItem: {
    id: "aa1d3f80270146208328cf66d022e09c"
  }
});

const view = new MapView({
  container: "viewDiv",
  map: webmap
});

const bookmarks = new Bookmarks({
  view: view,
  // allows bookmarks to be added, edited, or deleted
  editingEnabled: true
});

const bkExpand = new Expand({
  view: view,
  content: bookmarks,
  expanded: true
});

// Add the widget to the top-right corner of the view
view.ui.add(bkExpand, "top-right");

// bonus - how many bookmarks in the webmap?
webmap.when(function () {
  if (webmap.bookmarks && webmap.bookmarks.length) {
    console.log("Bookmarks: ", webmap.bookmarks.length);
  } else {
    console.log("No bookmarks in this webmap.");
  }
});