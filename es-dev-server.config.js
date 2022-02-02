module.exports = {
  debug: false,
  nodeResolve: true,
  open: "index.html",
  port: 5000,
  watch: true,
  plugins: [
    {
      resolveImport({ source }) {
        if (source === "moment/moment.js") {
          // use ES src module
          return "/node_modules/moment/src/moment.js";
        }
        if (source.startsWith("moment/locale/")) {
          return source.replace("moment/", "/node_modules/moment/src/") + ".js";
        }
      }
    }
  ]
};