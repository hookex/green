import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonImg, IonLabel, IonLoading, IonMenu,
  IonMenuButton,
  IonPage, IonRefresher, IonRefresherContent, IonRow, IonTabBar,
  IonTabButton, IonTabs,
  IonTitle,
  IonToolbar, RefresherEventDetail
} from '@ionic/react';
import ExploreContainer from '../components/explore-container/ExploreContainer';
import './Tab1.css';
import {
  menuOutline,
  createOutline,
  homeOutline,
  sunny,
  heartOutline,
  playCircleOutline,
  camera,
  cameraOutline
} from "ionicons/icons";
import {BarcodeScanner} from '@capacitor-community/barcode-scanner';
import {useState} from "react";

const Tab1: React.FC = () => {
  let feedItems = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/300',
      title: '施广陵你该去看病',
      userAvatar: 'https://via.placeholder.com/40',
      userName: '掌心脉',
      likes: 180,
      isVideo: false,
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300',
      title: '开箱 Apple Watch Hermès Ultra 2',
      userAvatar: 'https://via.placeholder.com/40',
      userName: '剖那数码李玥豪',
      likes: 286,
      isVideo: true,
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/300',
      title: '官网钛金属米兰尼斯好评',
      userAvatar: 'https://via.placeholder.com/40',
      userName: '小红薯61934C24',
      likes: 43,
      isVideo: false,
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/300',
      title: '开箱 Apple Watch Ultra',
      userAvatar: 'https://via.placeholder.com/40',
      userName: 'Starstar',
      likes: 557,
      isVideo: true,
    },
  ];

  feedItems = [...feedItems, ...feedItems, ...feedItems]

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }

  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  // 开始扫描
  const startScan = async () => {
    try {
      // 检查摄像头权限
      const status = await BarcodeScanner.checkPermission({force: true});
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
    <>
      <IonPage id="main-content">
        <IonHeader mode='ios'>
          <IonToolbar>
            {/* Left: Menu button */}
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>

            <div style={{display: 'flex', justifyContent: 'center', flex: 1}}>
              <IonButtons slot="primary">
                <IonButton style={{color: 'var(--primary-green-color)'}} size='large'>
                  <IonIcon icon={sunny}/> {/* 更改为绿色图标 */}
                </IonButton>
              </IonButtons>
            </div>

            {/* Center: Tabs */}
            {/*<IonTitle slot="start"></IonTitle>*/}
            {/*<IonTabs>*/}
            {/*    <IonTabBar slot="bottom">*/}
            {/*        <IonTabButton tab="tab1">*/}
            {/*            <IonButton>Tab 1</IonButton>*/}
            {/*        </IonTabButton>*/}
            {/*        <IonTabButton tab="tab2">*/}
            {/*            <IonButton>Tab 2</IonButton>*/}
            {/*        </IonTabButton>*/}
            {/*        <IonTabButton tab="tab3">*/}
            {/*            <IonButton>Tab 3</IonButton>*/}
            {/*        </IonTabButton>*/}
            {/*    </IonTabBar>*/}
            {/*</IonTabs>*/}

            {/* Right: Custom Button */}
            <IonButtons slot="end">
              <IonButton onClick={startScan}>
                <IonIcon icon={cameraOutline}/>
              </IonButton>

              <IonButton>
                <IonIcon icon={createOutline}/> {/* 菜单图标 */}
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>

          <IonGrid>
            <IonRow>
              {feedItems.map((item) => (
                <IonCol key={item.id} size="6" className="feed-item">
                  <IonCard className="feed-card">
                    {/* 图片区域 */}
                    <div className="image-container">
                      <IonImg
                        src={item.imageUrl}
                        className="feed-image"
                      />
                      {item.isVideo && (
                        <IonIcon
                          icon={playCircleOutline}
                          className="video-icon"
                        />
                      )}
                    </div>
                    {/* 标题 */}
                    <IonCardHeader className="card-header">
                      <h2 className="feed-title">{item.title}</h2>
                    </IonCardHeader>
                    {/* 用户信息 */}
                    <IonCardContent className="card-content">
                      <div className="user-info">
                        {/* 用户头像 */}
                        <IonAvatar className="user-avatar">
                          <IonImg src={item.userAvatar}/>
                        </IonAvatar>
                        {/* 用户信息 */}
                        <IonLabel className="user-name">
                          <h3>{item.userName}</h3>
                        </IonLabel>
                        {/* 点赞数量 */}
                        <div className="likes-container">
                          <IonIcon
                            icon={heartOutline}
                            className="likes-icon"
                          />
                          <span className="likes-count">{item.likes}</span>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

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
          <IonLoading isOpen={scanning} message="正在扫描..."/>

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

      <IonMenu contentId="main-content">
        <IonHeader mode='ios'>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
    </>
  );
};

export default Tab1;
