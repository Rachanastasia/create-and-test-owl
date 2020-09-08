import React from 'react';
import './Participants.css'
import Participant from './Participant/Participant';
import Top from './Top/Top'
import Chat from './Chat/Chat'

export default class Participants extends React.Component {
    state = {
        showChat: false
    }

    render() {
        return (
            <section className="participants">
                <Top />
                {this.state.sidebar === true
                    ? <Chat />
                    : <Participant store={this.props.store} />
                }
            </section>
        )
    }
}
