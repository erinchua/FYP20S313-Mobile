import { Plugins, PushNotificationActionPerformed, PushNotificationToken } from '@capacitor/core';
import { toDateObject } from './convert';
import moment from 'moment';
import { useHistory } from 'react-router';

const { LocalNotifications, PushNotifications } = Plugins;

export async function notification(date: string, time: string, description: string, type: string) {

    const allowAnnoucement = window.sessionStorage.getItem('allowAnnoucementNotif');
    const allowOpenhouse = window.sessionStorage.getItem('allowOpenhouseNotif');
    const isAllowOpenhouse: boolean = (allowOpenhouse === 'true');
    const isAllowAnnouncement: boolean = (allowAnnoucement === 'true');

    try {
        // Request/ check permissions
        if (type === 'programme') {
            if (!(await LocalNotifications.requestPermission()).granted || !isAllowOpenhouse) return;
        }

        if (type === 'announcement') {
            if (!(await LocalNotifications.requestPermission()).granted || !isAllowAnnouncement) return;
        }

        // Clear old notifications in prep for refresh (OPTIONAL)
        // const pending = await LocalNotifications.getPending();
        // if (pending.notifications.length > 0)
        //     await LocalNotifications.cancel(pending);

        const subTime = toDateObject(date, time);
        const sysTime = moment().toDate();

        if (type === "programme") {
            //schedule notification at 5 min before the actual start time
            const scheduled = moment(subTime).subtract(60 * 4.7, 's').toDate();

            if (scheduled > sysTime) {
                await LocalNotifications.schedule({
                    notifications: [{
                        title: 'SIM Openhouse scheduled event is commencing soon',
                        body: description,
                        id: 1,
                        schedule: {
                            at: scheduled
                        }
                    }]
                });
            } else {
                await LocalNotifications.schedule({
                    notifications: [{
                        title: 'SIM Openhouse scheduled event has commenced',
                        body: description,
                        id: 1,
                        schedule: {
                            at: new Date(Date.now() + 1000 * 5)
                        }
                    }]
                });
            }
        }

        if (type === "announcement") {
            if (sysTime >= subTime) {
                await LocalNotifications.schedule({
                    notifications: [{
                        title: 'New announcement from SIM Openhouse',
                        body: description,
                        id: 1,
                        schedule: {
                            at: new Date(Date.now() + 1000 * 5)
                        }
                    }]
                });
            }
        }

    } catch (error) {
        return console.error(error);
    }
}

/* export async function registerPush() {
    try {
        await PushNotifications.requestPermission().then(permission => {
            if (permission.granted) PushNotifications.register();
        });

        PushNotifications.addListener('registration', (token: PushNotificationToken) => {
            console.log(`Token: ${JSON.stringify(token)}`)
        });

        PushNotifications.addListener('pushNotificationActionPerformed', async (notification: PushNotificationActionPerformed) => {
            const data = notification.notification.data;
            console.log(`Action performed: ${JSON.stringify(notification.notification)}`);

            if (data.detailsId) {
                const history = useHistory();
                history.push('/u/announcements');
            }
        });
    } catch (e) {
        return console.log(e);
    }
} */