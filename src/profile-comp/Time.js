import React, { useState, useEffect } from 'react';

function Time() {
    const [time, setTime] = useState('')
    const zeros = (time) => {
        return (time < 10 ? '0' : '') + time
    }
    useEffect(() => {
        setInterval(async () => {
            let today = new Date();
            let hours = today.getHours()
            let minutes = await zeros(today.getMinutes())
            let seconds = await zeros(today.getSeconds())
            setTime(hours + ":" + minutes + ":" + seconds)
        }, 1000)
    }, [])

    return (
        <div id='time'>
            <p className='pos-bot-right titles'>{time}</p>
        </div>
    );
}

export default Time;