import { defineConfig } from 'dumi';
import { GenerateSW } from 'workbox-webpack-plugin';
import path from 'path';

export default defineConfig({
  title: 'antd-pro',
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/antd-pro/',
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en', name: 'EN' },
  ],
  themeConfig: {
    socialLinks: {
      github: 'https://github.com/drdevelop/antd-pro',
    },
  },
  // let fast debug packages if modify source code，
  // path is source code entry with current package
  alias: {
    'antd-pro-schema-form': path.join(__dirname, './packages/form/src/index.ts'),
  },
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
  // mfsu: false,
})
