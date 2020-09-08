import React from 'react';
import Stage from './Stage/Stage';
import Participants from './Participants/Participants';
import STORE from './STORE';
import './App.css';

import { VscThumbsdown } from 'react-icons/vsc';
import { VscThumbsup } from 'react-icons/vsc';


class App extends React.Component {

  render() {




    return (
      <main className='App'>
        {/* <h1>TESTING</h1>
        <VscThumbsdown />
        <VscThumbsup /> */}
        <Participants store={STORE} />
        <Stage store={STORE} />
      </main>
    )
  };
}

export default App;