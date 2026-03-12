import eventBus from "./EventBus";

export class PushNotifier{
    constructor(userId){
        this.userId = userId
        this.subscriptions = []
        this.receiveCount = 0
    }

    subscribe(categories){
        categories.forEach(category => {
            const unsubscribe = eventBus.subscribe(`news:${category}`, (article) => {
                this.showPushNotification(article)
            })
            this.subscriptions.push(unsubscribe)
        })
        console.log(`[Push] Registered for: ${categories.join(", ")}`)
    }

    showPushNotification(article){
        this.receiveCount++

        console.log(`%c[Browser Push  -> ${this.userId}]${article.headline}`, "color:orange; font-weight: bold")
        console.log(`Content: ${article.content.substring(0, 50)}...`)
    }

    unsubscribe(){
        this.subscriptions.forEach(unsub => unsub())
        this.subscriptions = []
        console.log('[Push] All subscriptions cleared')
    }
}