import {
  IonContent,
  IonHeader,
  IonImg,
  IonItem, IonLabel,
  IonList, IonNote,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/explore-container/ExploreContainer';
import './Tab2.css';
import {useState} from "react";

// 假设有一组热点数据
// 假设有一组简单的热点数据，只有标题和顺序数字
const initialHotspots = [
  {id: 1, title: '如何快速提升自己的编程能力？'},
  {id: 2, title: '5个必看的电影推荐'},
  {id: 3, title: '健身初学者如何入门'},
  {id: 4, title: '如何理财？个人理财指南'},
  {id: 5, title: '如何提高工作效率？'},
];

const Tab2: React.FC = () => {
  const [hotspots, setHotspots] = useState(initialHotspots);

  return (
    <IonPage>
      <IonHeader mode='ios'>
        <IonToolbar>
          <IonTitle>搜索</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* 热点列表 */}
        <IonList>
          {hotspots.length > 0 ? (
            hotspots.map((item) => (
              <IonItem key={item.id} lines="full">
                {/* 显示数字顺序 */}
                <IonLabel>
                  <h2>{item.id}. {item.title}</h2>
                </IonLabel>
              </IonItem>
            ))
          ) : (
            <IonItem lines="none">
              <IonLabel>
                <h2>没有找到相关热点</h2>
              </IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
