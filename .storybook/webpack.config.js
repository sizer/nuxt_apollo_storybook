const path = require("path");
const rootPath = path.resolve(__dirname, '../')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader"
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
   ]
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".gql"],
    alias: {
      "@": rootPath,
      "~": rootPath,
      vue$: "vue/dist/vue.esm.js"
    }
  }
};
