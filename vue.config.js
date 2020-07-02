module.exports = {
  configureWebpack: {
    resolveLoader: {
      modules: ["node_modules", "./loaders/"],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("text")
      .test(/\.txt$/)
      .use("replace-loader")
      .loader("replace-loader")
      .end()
      .use("txt-loader")
      .loader("txt-loader")
      .end();
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("md-loader")
      .loader("md-loader")
      .end();
  },
};
