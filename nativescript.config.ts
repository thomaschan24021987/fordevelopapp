import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.hairstyles2025.app',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true,
    suppressCallJSMethodExceptions: false
  },
  ios: {
    discardUncaughtJsExceptions: false,
    SPMPackages: []
  },
  cssParser: 'rework',
  webpackConfigPath: 'webpack.config.js'
} as NativeScriptConfig;