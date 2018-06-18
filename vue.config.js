module.exports = {
  baseUrl: '',
  chainWebpack(config) {
    'use strict';

    config.module
      .rule('html')
      .test(/\.html$/)
      .use('vue-template-loader')
      .loader('vue-template-loader')
      .tap((o) => {
        const options = o || {};
        options.exclude = /index\.html/;
        return options;
      })
      .end();
  },
};
