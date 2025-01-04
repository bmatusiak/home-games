import React from 'react';

import { Button } from 'react-bootstrap';

import Chooser from '../components/Chooser.jsx';

import Quit from '../components/Quit.jsx';

const SelectGame = (props) => {
    return (
        <>

            <div className='d-flex justify-content-center'>
                <h1>Select Game</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Chooser {...props} />
            </div>

            <Quit {...props} title="Back" />
        </>)
}

export default SelectGame