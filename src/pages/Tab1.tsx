import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader, IonIcon,
    IonMenuButton,
    IonPage, IonTabBar,
    IonTabButton, IonTabs,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {menuOutline, createOutline, homeOutline, sunny} from "ionicons/icons";

const Tab1: React.FC = () => {
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
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">首页</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Hello Hooke!"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
