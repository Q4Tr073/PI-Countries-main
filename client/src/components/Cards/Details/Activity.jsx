import React from 'react';


export default function Activity({name, difficulty, duration, season}){
    return(                     
        <div>
            <p><strong>Activity</strong></p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Difficulty:</strong> {difficulty}</p>
            <p><strong>Duration:</strong> {duration}</p>
            <p><strong>Season:</strong> {season}</p>                                
        </div>           
    )
}    