import path from 'path'
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  chainWebpack(config, { webpack }) {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
  // routes: [
  //   {
  //     path: '/',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  plugins: [
    [
      'umi-plugin-block-dev',
      {},
    ],
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // routes: {
      //   exclude: [
      //     /models\//,
      //     /services\//,
      //     /model\.(t|j)sx?$/,
      //     /service\.(t|j)sx?$/,
      //     /components\//,
      //   ],
      // },
    }],
  ],
}

export default config;
