import React from 'react'

export default function ApplicationButton(props) {
    return (
        <div className='application-button'>
            <div className='application-button__title'>
                {props.title}
            </div>
        </div>  
    )
}