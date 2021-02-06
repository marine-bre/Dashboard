import React, { useState } from 'react';
import TaskSettings from './TaskSettings';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddTask({ userId}) {
    const [showSettings, setShowSettings] = useState(false)

    const settingsHandler = (e) => {
        e.preventDefault();
        setShowSettings(true)
    }
    return (
        <>
            <div className='add'>
                <button className='add--btn' onClick={e => settingsHandler(e)}><FontAwesomeIcon icon={faPlus} className='add--icon center-container' /></button>
                <p>Add Task</p>
            </div>
            {showSettings === true && <TaskSettings setShowSettings={setShowSettings} userId={userId} />}
        </>
    );
}

export default AddTask;