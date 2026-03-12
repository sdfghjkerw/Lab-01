import { useState, useEffect, useMemo } from 'react';
import { NewsPublisher } from './newsPublisher.jsx';
import { EmailNotifier } from './EmailNotifier.jsx';
import { DashboardWidget } from './DashboardWidget.jsx';

function App() {
  const publisher = useMemo(() => new NewsPublisher("BBC News"), []);
  const emailSub = useMemo(() => new EmailNotifier("user@example.com"), []);
  
  const [articles, setArticles] = useState([]); 
  const [headline, setHeadline] = useState("");
  const [category, setCategory] = useState("tech");

  useEffect(() => {
    emailSub.subscribe(['all']);

    import('./pubsub/EventBus').then(module => {
      const eventBus = module.default;
      
      const unsubscribe = eventBus.subscribe('news:all', (newArticle) => {
        setArticles(prev => [newArticle, ...prev]);
      });

      return () => unsubscribe(); 
    });
  }, [emailSub]);

  const handlePublish = () => {
    if (!headline) return alert("Введите заголовок!");
    publisher.publishArticle(category, headline, "Full content of the article...", "normal");
    
    setHeadline(""); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>News Aggregator (Lab 9.1)</h1>
      
      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <input 
          value={headline} 
          onChange={(e) => setHeadline(e.target.value)} 
          placeholder="Заголовок новости"
          style={{ padding: '8px', marginRight: '10px', width: '250px' }}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '8px', marginRight: '10px' }}>
          <option value="tech">Tech</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
        </select>
        <button onClick={handlePublish} style={{ padding: '8px 15px', cursor: 'pointer' }}>Опубликовать</button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h2>Live Dashboard</h2>
          {articles.length === 0 && <p>Новостей пока нет...</p>}
          {articles.map(art => (
            <div key={art.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
              <h3>{art.headline}</h3>
              <small>{art.category} | {new Date(art.timestamp).toLocaleTimeString()}</small>
            </div>
          ))}
        </div>
        
        <div style={{ flex: 1, background: '#eee', padding: '15px' }}>
          <h3>System Info</h3>
          <p>Открой <b>Console (F12)</b>, чтобы увидеть работу Email и Push уведомлений!</p>
        </div>
      </div>
    </div>
  );
}

export default App;