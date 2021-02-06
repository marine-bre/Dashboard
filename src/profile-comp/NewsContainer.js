import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem.js'

function TaskToday() {
    const [news, setNews] = useState([]);
    const NEWS_API = '3db9dd4972a747969d0e7664112c714d';

    const fetchNews = () => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${NEWS_API}`)
            .then(response => response.json())
            .then(result => setNews([result.articles[0],result.articles[1],result.articles[3],result.articles[4]]))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div className='component flex-down news--container' id='news'>
        {/* <h2>News</h2> */}
            {news.map(n => <NewsItem title={n.title} url={n.url} urlToImage={n.urlToImage}/>)}
            </div>
    );
}

export default TaskToday;