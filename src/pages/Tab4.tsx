import React from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
  IonPage,
  IonAvatar,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import {
  ellipsisHorizontal,
  pencil,
  homeOutline,
  searchOutline,
  chatbubbleOutline,
  notificationsOutline,
  personOutline
} from 'ionicons/icons';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonApp>
      <IonPage >
        {/* 顶部导航 */}
        {/*<IonHeader mode='ios'>*/}
        {/*  <IonToolbar>*/}
        {/*    <IonButtons slot="end">*/}
        {/*      <IonButton>*/}
        {/*        <IonIcon icon={ellipsisHorizontal} />*/}
        {/*      </IonButton>*/}
        {/*    </IonButtons>*/}
        {/*  </IonToolbar>*/}
        {/*</IonHeader>*/}

        <IonContent>
          {/* 背景与头像区域 */}
          <div className="profile-header">
            <div className="background-placeholder"></div>
            <div className="profile-avatar">
              <IonAvatar>
                <img src="https://via.placeholder.com/150" alt="User Avatar"/>
              </IonAvatar>
            </div>
            <div className="profile-actions">
              <IonButton fill="outline" className="edit-button">
                Edit Profile
              </IonButton>
              <IonButton fill="outline" className="more-button">
                <IonIcon icon={ellipsisHorizontal}/>
              </IonButton>
            </div>
          </div>

          {/* 用户信息 */}
          <div className="profile-info">
            <h1>hooke</h1>
            <p>@hookedada.bsky.social</p>
            <div className="profile-stats">
              <span><strong>3</strong> followers</span>
              <span><strong>5</strong> following</span>
              <span><strong>1</strong> post</span>
            </div>
          </div>

          {/* Tab 栏 */}
          <IonSegment mode='ios' value="posts" className="profile-tabs">
            <IonSegmentButton value="posts">
              <IonLabel>Posts</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="replies">
              <IonLabel>Replies</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="media">
              <IonLabel>Media</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="likes">
              <IonLabel>Likes</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          {/* 内容区域 */}
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <div className="post-item">
                  <IonAvatar className="post-avatar">
                    <img src="https://via.placeholder.com/150" alt="User Avatar"/>
                  </IonAvatar>
                  <div className="post-content">
                    <h3>hooke</h3>
                    <p>hi</p>
                    <img
                      src="https://via.placeholder.com/300"
                      alt="Post Content"
                      className="post-image"
                    />
                  </div>
                </div>
              </IonCol>
              <IonCol size="12">
                <div className="post-item">
                  <IonAvatar className="post-avatar">
                    <img src="https://via.placeholder.com/150" alt="User Avatar"/>
                  </IonAvatar>
                  <div className="post-content">
                    <h3>hooke</h3>
                    <p>hi</p>
                    <img
                      src="https://via.placeholder.com/300"
                      alt="Post Content"
                      className="post-image"
                    />
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Tab4;
