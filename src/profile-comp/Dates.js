import React, { useEffect } from 'react';

function Dates(props) {

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let today, dd, mm, yyyy;
    let count = props.count
    const getDate = (n) => {
        today = new Date();
        dd = today.getDate() + n;
        mm = today.getMonth();
        yyyy = today.getFullYear()
        if (dd > 31) {
            dd = 1;
            mm++
        }
        if (dd < 1) {
            dd = 31;
            mm--
        }
        updateDateDisplays(yyyy, mm, dd)
    }

    const updateDateDisplays = (yyyy, mm, dd) => {
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (dd < 10) {
            dd = '0' + dd;
        }
        props.setDate(`${yyyy}-${mm + 1}-${dd}`);
        props.setDisplayDate(`${dd}${(dd === 1 || dd === 21) ? 'st' : (dd === 2 || dd === 22) ? 'nd' : 'th'} ${months[mm]}`);
    }

    useEffect(() => {
        getDate(count)
    }, [count])

    return (
        <div>
        </div>
    );
}

export default Dates;