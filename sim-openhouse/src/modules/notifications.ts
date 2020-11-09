import { Plugins } from '@capacitor/core';
import { toDateObject } from './convert';
import moment from 'moment';

const { LocalNotifications } = Plugins;

export async function notification(date: string, time: string, description: string, type: string) {

    const allowAnnouncement = window.sessionStorage.getItem('allowAnnouncementNotif');
    const allowOpenhouse = window.sessionStorage.getItem('allowOpenhouseNotif');
    const isAllowOpenhouse: boolean = (allowOpenhouse == 'true');
    const isAllowAnnouncement: boolean = (allowAnnouncement == 'true');

    try {
        // Request/ check permissions
        if (type === 'programme') {
            if (!(await LocalNotifications.requestPermission()).granted || !isAllowOpenhouse) return;
        }

        if (type === 'announcement') {
            console.log("In notification announcement")
            if (!(await LocalNotifications.requestPermission()).granted || !isAllowAnnouncement) {
                console.log("Permission denied")
                return;
            }
        }

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
            if (sysTime <= subTime) {
                const scheduled = moment(subTime).toDate();
                await LocalNotifications.schedule({
                    notifications: [{
                        title: 'New announcement from SIM Openhouse',
                        body: description,
                        id: 1,
                        schedule: {
                            at: scheduled
                        }
                    }]
                });
            }
        }

    } catch (error) {
        return console.error(error);
    }
}
