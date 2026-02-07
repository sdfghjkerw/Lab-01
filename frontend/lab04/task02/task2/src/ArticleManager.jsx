import React, { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

const ArticleManager = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: 'First Article', summary: "smt interesting.." }
    ]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const onClickAdd = () => {
        if (!title.trim() || !summary.trim()) return;

        const newArticle = { id: Date.now(), title, summary };
        setArticles([...articles, newArticle]);
        setTitle('');
        setSummary('');
    };

    const onClickRemove = (id) => {
        setArticles(articles.filter(a => a.id !== id));
    };

    return (
        <div>
            <AddArticle
                name="Articles Manager"
                title={title}
                summary={summary}
                onChangeTitle={(e) => setTitle(e.target.value)} 
                onChangeSummary={(e) => setSummary(e.target.value)}
                onClickAdd={onClickAdd}
            />
            <ArticleList articles={articles} onClickRemove={onClickRemove} />
        </div>
    );
}

export default ArticleManager;