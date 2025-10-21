require('dotenv').config();
const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const cache = new NodeCache({ stdTTL: 300 });

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4/search";

async function fetchArticles(params) {
    const cacheKey = JSON.stringify(params);
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const response = await axios.get(BASE_URL, { params: { ...params, token: GNEWS_API_KEY } });
    cache.set(cacheKey, response.data);
    return response.data;
}

app.get('/articles', async (req, res) => {
    try {
        const { n = 10 } = req.query;
        const data = await fetchArticles({ q: 'news', max: n });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/search', async (req, res) => {
    try {
        const { keyword, n = 10 } = req.query;
        if (!keyword) return res.status(400).json({ error: "Keyword is required" });
        const data = await fetchArticles({ q: keyword, max: n });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/title', async (req, res) => {
    try {
        const { title } = req.query;
        if (!title) return res.status(400).json({ error: "Title is required" });
        const data = await fetchArticles({ q: title, max: 10 });
        const match = data.articles.filter(a => a.title.toLowerCase().includes(title.toLowerCase()));
        res.json({ articles: match });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
