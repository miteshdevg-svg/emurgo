import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("keyword");

  const fetchArticles = async (query = "") => {
    setLoading(true);
    try {
      let url = "http://localhost:5000/articles?n=10";
      if (query) {
        url =
          searchType === "keyword"
            ? `http://localhost:5000/search?keyword=${query}&n=10`
            : `http://localhost:5000/title?title=${query}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchArticles(search);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📰 News Explorer</h1>
      </header>

      <main className="main">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="keyword">Keyword</option>
            <option value="title">Title</option>
          </select>
          <button type="submit">🔍 Search</button>
        </form>

        {loading ? (
          <p className="loading">Loading articles...</p>
        ) : articles.length > 0 ? (
          <div className="articles">
            {articles.map((article, i) => (
              <div className="card" key={i}>
                {article.image ? (
                  <img src={article.image} alt={article.title} />
                ) : (
                  <div className="no-image">No Image Available</div>
                )}
                <div className="card-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <div className="source">
                    Source:{" "}
                    <a href={article.source?.url} target="_blank" rel="noreferrer">
                      {article.source?.name || "Unknown"}
                    </a>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="read-btn"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-articles">No articles found.</p>
        )}
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} News Explorer | Built with ❤️ using React
      </footer>
    </div>
  );
}

export default App;
