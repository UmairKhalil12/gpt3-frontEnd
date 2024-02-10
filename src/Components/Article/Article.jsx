import "./Article.css"

export default function Article({ imgUrl, date, title }) {
    return (
        <div className="gpt3-blog-container-article">
            <div className="gpt3-blog-container-article-img">
                <img src={imgUrl} alt="blog" />
            </div>
            <div className="gpt3-blog-container-article-content">
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <p>Read full Article</p>
        </div>
    )
}