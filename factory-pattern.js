class EmailService {
    sendNotification(message) {
        console.log(`Sending email notification: ${message}`);
    }
}

class SMSService {
    sendNotification(message) {
        console.log(`Sending SMS notification: ${message}`);
    }
}

class PushService {
    sendNotification(message) {
        console.log(`Sending push notification: ${message}`);
    }
}

// Factory
class NotificationFactory {
    createNotificationService(type) {
        switch(type) {
            case 'email':
                return new EmailService();
            case 'sms':
                return new SMSService();
            case 'push':
                return new PushService();
            default:
                throw new Error(`Invalid notification type: ${type}`);
        }
    }
}

const emailService = new NotificationFactory().createNotificationService('email');
emailService.sendNotification('Hello !');

const pushService = new NotificationFactory().createNotificationService('push');
pushService.sendNotification('Goodbye !');