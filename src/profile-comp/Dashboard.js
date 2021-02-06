import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar.js'
import Welcome from './Welcome.js'
import Weather from './Weather.js';
import TaskFollow from './TaskFollow.js';
import Tasks from './Tasks.js'
import Titles from './Titles.js'
// import Time from './Time.js'
import ProfileComp from './ProfileBar/ProfileComp'
import NewsContainer from './NewsContainer.js';

function Dashboard(props) {
    const user = props.location.state.user
    const [showHome, setShowHome] = useState(true)
    const [showSchedule, setShowSchedule] = useState(false)
    const [loggedOut, setLoggedOut] = useState(false)
    const [percentageDone, setPercentageDone] = useState(0)
    const [tasks, setTasks] = useState([])
    const [date, setDate] = useState('')
    const [displayDate, setDisplayDate] = useState('')
    const [count, setCount] = useState(0)
    let months = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
    let today, finalDate, dd, mm, yyyy;

    const signout = () => {
        setLoggedOut(true)
    }

    const getDate = (count) => {
        today = new Date()
        finalDate = new Date()
        finalDate.setDate(today.getDate() + count)
        dd = finalDate.getDate();
        mm = finalDate.getMonth() + 1;
        yyyy = finalDate.getFullYear()
        updateDateDisplays(yyyy, mm, dd)
    }

    const updateDateDisplays = (yyyy, mm, dd) => {
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (dd < 10) {
            dd = '0' + dd;
        }
        setDate(`${yyyy}-${mm}-${dd}`)
        setDisplayDate(`${dd}${(dd === 1 || dd === 21) ? 'st' : (dd === 2 || dd === 22) ? 'nd' : (dd === 3 || dd === 23) ? 'rd' : 'th'} ${months[(mm-1) % 12]}`)
    }

    useEffect(() => {
        getDate(count)
    }, [count])

    useEffect(() => {
        getDate(0)
    }, [])

    const getAllPosts = () => {
        let options = {
            "method": "POST",
            "body": JSON.stringify({
                'userId': user._id,
                'date': date
            }),
            "headers": {
                "Content-Type": "application/json"
            }
        }
        fetch("https://guarded-wildwood-26859.herokuapp.com/api/task/allPosts", options)
            .then(response => response.json())
            .then(result => setTasks([...result]))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getAllPosts()
        completion()
    }, [tasks, date])

    const completion = () => {
        if (tasks.length === 0) {
            setPercentageDone(0)
        }
        else {
            let a = tasks.filter(task => task.status)
            let p = (a.length) * 100 / tasks.length
            setPercentageDone(p)
        }
    }

    return (
        <div id='dashboard' className='center-container'>

            <Navbar setShowHome={setShowHome} setShowSchedule={setShowSchedule} signout={signout} />

            {showHome &&
                <div id='dashboard-components'>
                    <Titles id='dash' content="Dashboard" />
                    {/* <Time /> */}
                    <Welcome name={user.name} />
                    <Titles id='info' content="Today's info" />
                    <NewsContainer />
                    <TaskFollow userId={user._id} setShowHome={setShowHome} setShowSchedule={setShowSchedule} percentageDone={percentageDone} />
                    <Weather />
                    <ProfileComp name={user.name} />
                </div>}

            {showSchedule &&
                <div id='dashboard-components'>
                    <Tasks userId={user._id} percentageDone={percentageDone} tasks={tasks} count={count} setCount={setCount} date={date} displayDate={displayDate} />
                </div>}
            {loggedOut && <Redirect to={{
                pathname: '/login',
            }} />}
        </div>
    );
}


export default Dashboard;