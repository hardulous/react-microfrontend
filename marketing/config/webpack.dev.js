// Webpack for development mode only

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("../package.json").dependencies; // dependencies from package.json

const devConfig = {
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./marketingIndex": "./src/bootstrap.js",
      },
      shared: {
        ...deps, // automate the task of manually adding shared module in this property
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

// Here this marketing app and container app both using react , react-dom so in network tab 2 copies of react , react-dom is being downloaded so to avoid this we will use shared property of moduleFederationPlugin to download only 1 copy of react and react-don
