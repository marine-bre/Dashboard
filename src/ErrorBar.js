import React from 'react';

function ErrorBar({error, show}) {
    
    return (
        <div className={`flex-container error-bar ${show? 'show-error-bar' : ''}`}>
            <p>{error}</p>
        </div>
    );
}

export default ErrorBar;