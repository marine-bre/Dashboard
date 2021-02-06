import React, { useState } from 'react';
import ReactDom from 'react-dom'
import '../App.css'


function TaskSettings({ setShowSettings, userId }) {

    const getDate = (n) => {
        let today = new Date();
        let dd = today.getDate() + n;
        let mm = today.getMonth() + 1 ;
        console.log(mm)
        let yyyy = today.getFullYear()
         if (mm < 10) {
            mm = '0' + mm;
        }
        if (dd < 10) {
            dd = '0' + dd;
        }
       
        return `${yyyy}-${mm}-${dd}`
    }

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('12.00')
    const [date, setDate] = useState(getDate(0))
    const [color, setColor] = useState('#f7bf4f')
    const newTask = (e) => {

        e.preventDefault();
        //create task object
        const task = {
            "userId": userId,
            "title": title,
            "description": description,
            "time": deadline,
            "color": color,
            "date": date
        }
        //send object to database
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task),
            redirect: 'follow'
        };

        fetch("https://guarded-wildwood-26859.herokuapp.com/api/task/new", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setShowSettings(false)
    }

    return ReactDom.createPortal(
        <>
            <div className='overlay' />
            <div className='modal flex-container-column'>
                <h1>Create a new task</h1>
                <form className='form flex-container-column' onSubmit={e => newTask(e)}>
                    <div className='flex-container-column' >
                        <input placeholder='Title' id='title' className='task--input' type='text' onChange={(e) => setTitle(e.target.value)}></input>
                        <input placeholder='Description' id='description' className='task--input' type='text' onChange={(e) => setDescription(e.target.value)}></input>
                        <div onChange={(e) => setColor(e.target.value)} className='task--input-radio flex-horizontal'>
                            <label htmlFor='color'>Category </label>
                            <input type='radio' value='#f7bf4f' name='cat' />Work
                            <input type='radio' value='#5e7feb' name='cat' />Home
                            <input type='radio' value='#f27f7f' name='cat' />Other
                        </div>
                        <input id='date' type='date' className='task--input-numbers' onChange={(e) => setDate(e.target.value)}></input>
                        <input id='time' type='time' className='task--input-numbers' onChange={(e) => setDeadline(e.target.value)}></input>
                    </div>
                    <div className='btn--container'>
                        <button onClick={() => setShowSettings(false)} className='btn btn--secondary'>Cancel</button>
                        <button type='submit' className='btn btn--primary'>Submit</button>
                    </div>
                </form>

            </div>
        </>,
        document.getElementById('portal')
    );
}

export default TaskSettings;