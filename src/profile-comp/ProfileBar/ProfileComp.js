import React from 'react';
import Titles from '../Titles.js'
import PicInfo from './PicInfo.js'
import Messages from './Messages.js'

function ProfileComp({ name }) {
    return (
        <div className='profile--container'>
            <Titles content="Profile" />
            <PicInfo name={name} />
            <Titles id='profile--messages-title' content="Recent messages" />
            <Messages />
        </div>
    );
}

export default ProfileComp;