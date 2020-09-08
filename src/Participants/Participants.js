import React from 'react';
import './Participants.css'
import Participant from './Participant/Participant';

export default function Participants(props) {
    console.log(props.store);
    return (
        <section className="participants">
            <Participant store={props.store} />

        </section>
    )
}
