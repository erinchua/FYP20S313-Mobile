import { Plugins, LocalNotification } from '@capacitor/core';
const { LocalNotifications } = Plugins;

class Notifications {
    public async schedule(minute: number) {
        try {
            // Request/ check permissions
            if (!(await LocalNotifications.requestPermission()).granted) return;

            // Clear old notifications in prep for refresh (OPTIONAL)
            const pending = await LocalNotifications.getPending();
            if (pending.notifications.length > 0)
                await LocalNotifications.cancel(pending);

            await LocalNotifications.schedule({
                notifications: [{
                    title: 'SIM Openhouse scheduled event',
                    body: 'Your scheduled event will commence in 5min',
                    id: 1,
                    schedule: {
                        at: new Date(Date.now() + 100000 * minute),
                    }
                }]
            });
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