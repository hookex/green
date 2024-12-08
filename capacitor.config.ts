import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'green',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,  // 启动画面显示时间（毫秒）
      launchAutoHide: true,     // 是否自动隐藏启动画面
      backgroundColor: '#2A6450FF', // 启动画面的背景色（ARGB 格式）
      androidSplashResourceName: 'splash', // Android 启动画面资源名称
      iosSplashResourceName: 'Default',   // iOS 启动画面资源名称
      showSpinner: true,        // 是否显示加载指示器
      spinnerStyle: 'large',    // 加载指示器样式（针对 iOS）
      spinnerColor: '#ffffff'   // 加载指示器颜色
    }
  }
};

export default config;
