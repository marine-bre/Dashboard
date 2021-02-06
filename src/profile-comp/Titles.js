import React from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Titles({ id, content }) {
    return (
        <div id={id} >
            <h2 className='titles'>{content} <FontAwesomeIcon icon={faChevronRight} style={{height:'15px', marginBottom:'1px'}}/></h2>
        </div>
    );
}

export default Titles;