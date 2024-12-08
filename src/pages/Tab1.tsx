import {
    IonButton,
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol,
    IonContent, IonGrid,
    IonHeader, IonIcon, IonImg,
    IonMenuButton,
    IonPage, IonRow, IonTabBar,
    IonTabButton, IonTabs,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {menuOutline, createOutline, homeOutline, sunny} from "ionicons/icons";

const Tab1: React.FC = () => {
    const feedItems = [
        { id: 1, imageUrl: 'https://via.placeholder.com/300', title: '标题 1', description: '描述 1' },
        { id: 2, imageUrl: 'https://via.placeholder.com/300', title: '标题 2', description: '描述 2' },
        { id: 3, imageUrl: 'https://via.placeholder.com/300', title: '标题 3', description: '描述 3' },
        { id: 4, imageUrl: 'https://via.placeholder.com/300', title: '标题 4', description: '描述 4' },
        { id: 5, imageUrl: 'https://via.placeholder.com/300', title: '标题 5', description: '描述 5' },
        { id: 6, imageUrl: 'https://via.placeholder.com/300', title: '标题 6', description: '描述 6' },
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/* Left: Menu button */}
                    <IonButtons slot="start">
                        <IonButton>
                            <IonIcon icon={menuOutline}/> {/* 菜单图标 */}
                        </IonButton>
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
                <IonGrid>
                    <IonRow>
                        {/* 遍历 Feed 项目 */}
                        {feedItems.map((item) => (
                            <IonCol key={item.id} size="6" sizeMd="4" sizeLg="3">
                                <IonCard>
                                    <IonImg src={item.imageUrl} alt={item.title} />
                                    <IonCardHeader>
                                        <IonCardTitle>{item.title}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>{item.description}</IonCardContent>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
