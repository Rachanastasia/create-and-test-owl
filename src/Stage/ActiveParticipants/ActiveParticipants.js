import React from 'react';
import PersonBar from './PersonBar/PersonBar/PersonBar'
import './ActiveParticipant.css'

export default function ActiveParticipants(props) {




    return (
        <section className="stageParticipant">
            <PersonBar person={props.person} />
            <img className="avatar" src={props.person.avatar} alt="robot icon" />
        </section>
    )
}