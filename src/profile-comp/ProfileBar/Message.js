import React from 'react';

function Message({ sender, content, time }) {
    return (
        <div className='message--container component'>
            <div className='message--pic'></div>
            <div className=' message--container--inside flex-container-column'>
                <div className='message--container' style={{width: '100%'}}>
                    <h3>{sender}</h3>
                    <br/>
                    <h4>{time}</h4>
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Message;