import React from 'react';
import './Top.css';

import { BsGearWide } from 'react-icons/bs'
import { FiLink } from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function Top() {

    return (
        <div className='top'>
            <button type='button'>Chat</button>
            <button type='button'>Participants</button>
            <BsGearWide className='top-icon' />
            <FiLink className='top-icon' />
            <AiOutlineQuestionCircle className='top-icon' />

        </div>
    )
}