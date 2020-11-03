import { Plugins, LocalNotification } from '@capacitor/core';
import { toDateObject } from '../modules/convert'
import moment from 'moment'
const { LocalNotifications } = Plugins;


class Notifications {
    public async schedule(date: string, time: string, progName: string) {
        try {
            // Request/ check permissions
            if (!(await LocalNotifications.requestPermission()).granted) return;

            // Clear old notifications in prep for refresh (OPTIONAL)
            const pending = await LocalNotifications.getPending();
            if (pending.notifications.length > 0)
                await LocalNotifications.cancel(pending);

            const progTime = toDateObject(date, time)
            const sysTime = moment().toDate()
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
                        title: 'SIM Openhouse scheduled event is has commenced',
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

    public async requestPermission() {
        console.log("Pressed")
        try {
            // Request/ check permissions
            if (! await LocalNotifications.areEnabled())
                await LocalNotifications.requestPermission();
        }
        catch (error) {
            console.log(error)
        }
    }

}


export default new Notifications()