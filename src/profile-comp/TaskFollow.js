import React from 'react';
import AddTask from './AddTask';
import Progress from './Progress';

function TaskFollow({ userId, setShowHome, setShowSchedule, percentageDone }) {

const viewbox = "0 0 40 40";
const progressLabelX = "50"
    return (
        <div className='component' id='task--follow'>
            <h2>Task Manager</h2>
            <AddTask userId={userId} />
            <Progress percentageDone={percentageDone} viewbox={viewbox} progressLabelX={progressLabelX} height={120}/>
            <button className='btn btn--primary' onClick={() => { setShowHome(false); setShowSchedule(true) }}> Go to my schedule </button>
        </div>
    );
}

export default TaskFollow;