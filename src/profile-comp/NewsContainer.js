import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem.js'
import axios from 'axios';

function TaskToday() {
    const [news, setNews] = useState([]);
    const NEWS_API = '6819d60ec5839999b039fcd6743e708e';

    const fetchNews = () => {
        axios(`https://gnews.io/api/v4/search?q=example&token=${NEWS_API}`)
            // .then(response => console.log(response.data.articles[0]))
            .then(result => setNews([result.data.articles[0],result.data.articles[1],result.data.articles[3],result.data.articles[4]]))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div className='component flex-down news--container' id='news'>
        {/* <h2>News</h2> */}
            {news.map(n => <NewsItem title={n.title} url={n.url} urlToImage={n.image}/>)}
            </div>
    );
}

export default TaskToday;