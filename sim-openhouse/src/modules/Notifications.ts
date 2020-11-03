import { Plugins, LocalNotification } from '@capacitor/core';
import { toDateObject } from './convert'
import moment from 'moment'


const { LocalNotifications, LocalNotificationEnabledResult } = Plugins;


const notification = async (date: string, time: string, progName: string) => {

    const allowAnnoucement = await window.sessionStorage.getItem('allowAnnoucementNotif')
    const allowOpenhouse = await window.sessionStorage.getItem('allowOpenhouseNotif');
    const isAllowOpenhouse: boolean = (allowOpenhouse == 'true');

    try {
        // Request/ check permissions
        if (!(await LocalNotifications.requestPermission()).granted || !isAllowOpenhouse) return;

        // Clear old notifications in prep for refresh (OPTIONAL)
        const pending = await LocalNotifications.getPending();
        if (pending.notifications.length > 0)
            await LocalNotifications.cancel(pending);

        const progTime = toDateObject(date, time)
        const sysTime = moment().toDate()
        //schedule notification at 5 min before the actual start time
        const scheduled = moment(progTime).subtract(60 * 4.7, 's').toDate()
        if (scheduled > sysTime) {
            await LocalNotifications.schedule({
                notifications: [{
                    title: 'SIM Openhouse scheduled event is commencing soon',
                    body: progName,
                    id: 1,
                    schedule: {
                        at: scheduled
                    }
                }]
            });
        }
        else {
            await LocalNotifications.schedule({
                notifications: [{
                    title: 'SIM Openhouse scheduled event has commenced',
                    body: progName,
                    id: 1,
                    schedule: {
                        at: new Date(Date.now() + 1000 * 5)
                    }
                }]
            });
        }

    } catch (error) {
        console.error(error);
    }

}




export default notification;