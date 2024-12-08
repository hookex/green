import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { SplashScreen } from '@capacitor/splash-screen';

// 在组件挂载后隐藏启动画面
const MainApp = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []); // 空数组表示仅在组件挂载时执行一次

    return <App />;
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);