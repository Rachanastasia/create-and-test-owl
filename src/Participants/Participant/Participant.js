import React from 'react';

import './Participant.css'

export default function Participant(props) {
    const participants = props.store.map(person => {
        let stage = "";
        if (person.onStage === true) {
            stage = "on stage"
        } else {
            stage = 'in session'
        }

        if (person.inSession === true) {
            return (
                <div className="person">
                    <img src={person.avatar} alt="an icon" width="50px" />
                    <div className="wrapNameStage">
                        <p className="personName">{person.name}</p>
                        <p className="onStage"><span class="dot"></span>{stage}</p>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className='wrapper'>
            {participants}

        </div>
    )
}