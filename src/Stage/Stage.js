import React from 'react';
import './Stage.css'
import ActiveParticipants from './ActiveParticipants/ActiveParticipants';

export default function Stage(props) {
    const active = props.store.filter(person => person.onStage)
    return (
        <section className="stage">
            <ActiveParticipants person={active[0]} />
            <ActiveParticipants person={active[1]} />
        </section>);
}