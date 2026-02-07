import ArticleItem from "./ArticleItem";

function ArticleList({ articles, onClickRemove }) {
    return (
        <div>
            {articles.map(article => (
                <ArticleItem
                    key={article.id}
                    article={article}
                    onClickRemove={onClickRemove}
                />
            ))}
        </div>
    );
}

export default ArticleList;
