import {
  IonAvatar,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonImg, IonLabel, IonMenu,
  IonMenuButton,
  IonPage, IonRefresher, IonRefresherContent, IonRow, IonTabBar,
  IonTabButton, IonTabs,
  IonTitle,
  IonToolbar, RefresherEventDetail
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {menuOutline, createOutline, homeOutline, sunny, heartOutline, playCircleOutline} from "ionicons/icons";

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
