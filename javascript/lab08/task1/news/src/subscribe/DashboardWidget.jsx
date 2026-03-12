import eventBus from "./EventBus";

export class DashboardWidget{
    constructor(elementId){
        this.container = document.getElementById(elementId)
        this.subscriptions = []
        this.articleCount = 0
    }

    subscribe(topics = ['all']){
        topics.forEach(topic => {
            const unsubscribe = eventBus.subscribe(`news:${topic}`, (article) => {
                this.updateUI(article)
            })
            this.subscriptions.push(unsubscribe)
        })
    }

    updateUI(article){
        this.articleCount++
        if(this.container){
            const articleElement = document.createElement('div')
            articleElement.className = `article-card ${article.priority}`//normal or urgent
            articleElement.innerHTML = `
                <h4>${article.headline}</h4>
                <p>${article.content}</p>
                <small>source ${article.source} | ${article.category}</small>
            `
            this.container.prepend(articleElement)
        }
        console.log(`[Dashboard] UI updated with article: ${article.headline}`)
    }
    unsubscribe() {
        this.subscriptions.forEach(unsub => unsub());
        this.subscriptions = [];
    }
}