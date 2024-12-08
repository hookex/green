import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList, IonNote,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
    let messages = [
        {
            id: 1,
            avatar: 'https://via.placeholder.com/150',
            title: 'Alice',
            summary: 'Hello! How are you doing today?',
            time: '10:30 AM',
        },
        {
            id: 2,
            avatar: 'https://via.placeholder.com/150',
            title: 'Bob',
            summary: 'Check out this awesome picture!',
            time: '9:45 AM',
        },
        {
            id: 3,
            avatar: 'https://via.placeholder.com/150',
            title: 'Charlie',
            summary: 'Are we still meeting tomorrow?',
            time: 'Yesterday',
        },
        {
            id: 4,
            avatar: 'https://via.placeholder.com/150',
            title: 'Daisy',
            summary: 'Can you help me with my project?',
            time: '2 days ago',
        },
    ];

    messages = [...messages, ...messages, ...messages, ...messages]

    return (
        <IonPage>
            <IonHeader mode='ios'>
                <IonToolbar>
                    <IonTitle>消息</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {messages.map((message) => (
                        <IonItem key={message.id} lines="full">
                            {/* 左侧头像 */}
                            <IonAvatar slot="start">
                                <img src={message.avatar} alt={`${message.title}'s avatar`}/>
                            </IonAvatar>

                            {/* 中间内容 */}
                            <IonLabel>
                                <h2>{message.title}</h2>
                                <p>{message.summary}</p>
                            </IonLabel>

                            {/* 右侧时间 */}
                            <IonNote slot="end">{message.time}</IonNote>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
