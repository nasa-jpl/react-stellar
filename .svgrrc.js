module.exports = {
  typescript: true,
  indexTemplate: require("./icon-index-template.js"),
  svgoConfig: {
    plugins: [
      {
        removeViewBox: false,
      },
    ],
  },
};
