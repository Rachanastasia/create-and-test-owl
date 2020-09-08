import React from 'react';
import { AiOutlineSound } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'

import './PersonBar.css'


export default function PersonBar(props) {



    return (
        <div class="activePersonBar">
            <h3>{props.person.name}</h3>
            <div className='icons'>
                <AiOutlineSound className='sound' />
                <AiOutlineSearch />
            </div>
        </div>
    )
}