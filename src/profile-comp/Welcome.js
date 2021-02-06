import React from 'react';

function Welcome({ name }) {
    const capitaliseFirst = (str) => {
        let words = str.toLowerCase().split(' ')
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        return words[0]
    }
    return (
        <div className='component welcome--container'>
            <h2>Welcome back <strong>{capitaliseFirst(name)}</strong> ! Good luck today!</h2>
        </div>
    );
}

export default Welcome;