import { EmailNotification } from "./notifications/EmailNotification.js"; [cite: 195]
import { SMSNotification } from "./notifications/SMSNotification.js"; [cite: 197]
import { PushNotification } from "./notifications/PushNotification.js"; [cite: 198]

export class NotificationFactory {
  static create(type, options) {
    switch (type) {
      case "email":
        return new EmailNotification(options.to, options.subject)
      case "sms":
        return new SMSNotification(options.to)
      case "push":
        return new PushNotification(options.deviceToken, options.title)
      default:
        throw new Error(`Unknown notification type: ${type}`)
    }
  }

  static getSupportedTypes() {
    return ["email", "sms", "push"]
  }
}