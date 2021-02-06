import React from 'react';

function NewsItem({ title, url, urlToImage }) {
    return (
        <div className='news--item'>
            <img src={urlToImage} alt='news'/>
            <div className='news--item--detail flex-container-column'>
                <h3>{title}</h3>
                <a href={url} target='#_blank'><p>Click to read more...</p></a>
            </div>

        </div>
    );
}

export default NewsItem;