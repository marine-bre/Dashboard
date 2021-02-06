import React from 'react';
import Task from './Task'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTask from './AddTask';
import Progress from './Progress'
import Titles from './Titles';

function Tasks({ userId, percentageDone, tasks, count, setCount, displayDate, getAllPosts, setTasks }) {

    const viewbox = "0 0 40 40"
    const progressLabelX = "25"

    return (
        <>
        <Titles content='My schedule' id='schedule'/>
            <div className='task--date flex-container'>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => setCount(count - 1)}  className='date--arrow'/>
                <h2>{displayDate}</h2>
                <FontAwesomeIcon icon={faChevronRight} onClick={() => setCount(count + 1)} className='date--arrow'/>
            </div>
            <div className='task--work flex-down'>
                <h3 className='task--title titles'>WORK</h3>
                <div className='tasks'>
                    {tasks.filter(task => task.color === '#f7bf4f').map(task => <Task postId={task._id} title={task.title} description={task.description} time={task.time} color={task.color} key={task.title} status={task.status} />)}
                </div>
            </div>
            <div className='task--home flex-down'>
                <h3 className='task--title titles'>HOME</h3>
                <div className='tasks'>
                    {tasks.filter(task => task.color === '#5e7feb').map(task => <Task postId={task._id} title={task.title} description={task.description} time={task.time} color={task.color} key={task.title} status={task.status} />)}
                </div>
            </div>
            <div className='task--other flex-down'>
                <h3 className='task--title titles'>OTHERS</h3>
                <div className='tasks'>
                    {tasks.filter(task => task.color === '#f27f7f').map(task => <Task postId={task._id} title={task.title} description={task.description} time={task.time} color={task.color} key={task.title} status={task.status} />)}
                </div>
            </div>
            <div className='flex-down task--follow--container'>
            <div className='divider'></div>
            <div className='task--manager'>
                <AddTask userId={userId} />
                <Progress percentageDone={percentageDone} viewbox={viewbox} progressLabelX={progressLabelX} height={70}/>
            </div>
            </div>
        </>
    );
}


export default Tasks;