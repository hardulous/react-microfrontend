// Webpack for production mode only

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("../package.json").dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // output file will be created with this template
    publicPath: "/marketing/latest", // now with each script tag added to index.html by default the /marketing/latest path will be prepend to it
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./marketingIndex": "./src/bootstrap.js",
      },
      shared: {
        ...deps,
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
