import React from 'react';

import { Button } from 'react-bootstrap';

import Chooser from '../components/Chooser.jsx';

import Quit from '../components/Quit.jsx';

const SelectGame = (props) => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <Chooser {...props} />
            </div>

            <Quit {...props} />
        </>)
}

export default SelectGame