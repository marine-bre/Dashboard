import React from 'react';
import Message from './Message';

function Messages(props) {

    const messages = [
        {
            sender: 'Cirilla',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tincidunt ipsum et imperdiet.',
            time: 'Today, 12:00'
        },
        {
            sender: 'Geralt',
            content: 'Lorem ipsum dolor sit amet.',
            time: 'Today, 12:30'
        },
        {
            sender: 'Emhyr',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tincidunt ipsum.',
            time: 'Yesterday'
        }
    ]

    return (
        <div className='messages--container'>
            {messages.map(message => <Message sender={message.sender} content={message.content} time={message.time} />)}
        </div>
    );
}

export default Messages;