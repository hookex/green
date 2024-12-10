import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonAlert,
  IonLoading
} from '@ionic/react';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import './index.css';

const Scanner: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  // 开始扫描
  const startScan = async () => {
    try {
      // 检查摄像头权限
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (!status.granted) {
        setShowError(true);
        return;
      }

      // 开始扫描
      setScanning(true);
      BarcodeScanner.hideBackground(); // 隐藏背景（仅适用于 Web 应用）
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        setScanResult(result.content); // 扫描到的内容
      }
    } catch (error) {
      console.error('扫描错误:', error);
      setShowError(true);
    } finally {
      setScanning(false);
      BarcodeScanner.showBackground(); // 恢复背景显示
    }
  };

  // 停止扫描
  const stopScan = () => {
    BarcodeScanner.stopScan();
    setScanning(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>扫一扫</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* 扫描结果显示 */}
        {scanResult && (
          <div className="scan-result">
            <h3>扫描结果:</h3>
            <p>{scanResult}</p>
          </div>
        )}

        {/* 开始扫描按钮 */}
        {!scanning ? (
          <IonButton expand="full" onClick={startScan}>
            开始扫描
          </IonButton>
        ) : (
          <IonButton expand="full" color="danger" onClick={stopScan}>
            停止扫描
          </IonButton>
        )}

        {/* 加载状态 */}
        <IonLoading isOpen={scanning} message="正在扫描..." />

        {/* 错误提示 */}
        <IonAlert
          isOpen={showError}
          onDidDismiss={() => setShowError(false)}
          header="扫描失败"
          message="无法访问摄像头或扫描错误"
          buttons={['确定']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Scanner;
