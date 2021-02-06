import React, { useState } from 'react';
import { faHome, faListAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ setShowHome, setShowSchedule, signout }) {

const [home, setHome] = useState(true);
const [schedule, setSchedule] = useState(false);

    return (
        <div id='navbar'>
            <div className='icons-container flex-container-column'>
                    <div className={`flex-horizontal navbar--element ${home? 'selected' : ''} `} onClick={() => { setShowHome(true); setShowSchedule(false) ; setHome(true); setSchedule(false)}}><FontAwesomeIcon icon={faHome} className='icons' /><p className='navbar--text'>Home</p></div>
                    <div className={`flex-horizontal navbar--element ${schedule? 'selected' : ''} `} onClick={() => { setShowHome(false); setShowSchedule(true) ; setHome(false); setSchedule(true) }}><FontAwesomeIcon icon={faListAlt} className='icons' /><p className='navbar--text'>Schedule</p></div>
                    <div className='flex-horizontal navbar--element' onClick={() => signout()}><FontAwesomeIcon icon={faSignOutAlt} className='icons'/><p className='navbar--text'>Logout</p></div>
            </div>
        </div>
    );
}

export default Navbar;