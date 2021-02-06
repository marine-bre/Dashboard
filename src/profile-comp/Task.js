import React, { useState, useEffect } from 'react';
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task(props) {

    const { postId, title, description, time, color, status} = props;
    const [dropdownStatus, setDropdownStatus] = useState('hidden')
    const [postStatus, setPostStatus] = useState(status)
    const [postBackgroundColor, setBackgroundColor] = useState('none')

    const deleteTask = () => {
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ postId })
        }
        fetch("https://guarded-wildwood-26859.herokuapp.com/api/task/delete", options)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    const changeTaskStatus = () => (!postStatus) ? setPostStatus(true) : setPostStatus(false)
    
    useEffect(() => {
        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "postId": postId,
                "status": postStatus
            })
        }
        fetch("https://guarded-wildwood-26859.herokuapp.com/api/task/status", options);
    }, [postStatus,postId])

    useEffect(() => {
        (status) ? setBackgroundColor(color) : setBackgroundColor('white')
    }, [status, color])

    return (
        <div className='task--container'>
            <div className='task--line' style={{ backgroundColor: color }}></div>
            <div className='task--status' style={{ border: 'solid 1px', color, backgroundColor: postBackgroundColor }} onClick={() => changeTaskStatus()}></div>
            <div className='task--text flex-container-column'>
                <h1 className='titles'>{title}</h1>
                <h3>{description}</h3>
                <p style={{ color }}> Until {time} </p>
            </div>
            <div className='space'></div>
            <div style={{ position: 'relative' }}>
                <button onClick={() => (dropdownStatus === 'hidden') ? setDropdownStatus('') : setDropdownStatus('hidden')} className='task--modify'><FontAwesomeIcon icon={faEllipsisV} className='center-container add-task-sign-icons' /></button>
                <div className={`task--dropdown ${dropdownStatus}`}>
                    <p onClick={() => deleteTask()}>Delete</p>
                </div>
            </div>
        </div>
    );
}

export default Task;