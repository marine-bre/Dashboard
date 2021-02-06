import React, { useState, useEffect } from 'react';

function Quote(props) {
    const [quoteObj, setQuoteObj] = useState('')

useEffect(()=>{
let index = Math.floor((Math.random()*100))
fetch('https://type.fit/api/quotes').then(response=>response.json()).then(result => setQuoteObj(result[index])).catch(err=>console.log(err))
},[])

    return (
        <div className='component quote-component'>
        <h2>Quote of the day</h2> 
            <div className='quote'>
                <h2>"{quoteObj.text}"</h2>
                <h3>- {quoteObj.author}</h3>
            </div>
        </div>
    );
}

export default Quote;