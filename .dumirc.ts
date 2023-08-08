import { defineConfig } from 'dumi';
import { GenerateSW } from 'workbox-webpack-plugin';

export default defineConfig({
  title: 'antd-pro',
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/antd-pro/',
  history: {
    type: 'hash'
  },
  chainWebpack(memo) {
    memo.plugin('workbox-webpack-plugin')
      .use(
        GenerateSW,
        [{
          clientsClaim: true,
          skipWaiting: true,
          maximumFileSizeToCacheInBytes: 1024 * 1024 * 5,
          cleanupOutdatedCaches: true,
          exclude: [/\.map$/, /^manifest.*\.js$/, /\.html$/],
          runtimeCaching: [{
            urlPattern: /.*\.html/,
            handler: 'NetworkFirst',
          }],
        }]
      );
  },
})
