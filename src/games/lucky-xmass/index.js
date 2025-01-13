import React from 'react';
import { useState } from "react";

import { Button } from 'react-bootstrap';
import Quit from '../../components/Quit.jsx';

import { Dice, Dice3D } from '../../components/dice';

export const View = (props) => {

    const [result, set_result] = useState(0);

    const Action = <Button variant="primary" onClick={() => {
        set_result(0)
    }}>Spin</Button>

    return (<>
        <div className='d-flex justify-content-center'>
            <Dice value={result} onResult={(value) => {
                set_result(value)
                // console.log("dice value", value)
            }} />
            <Dice3D value={result} onResult={(value) => {
                set_result(value)
                // console.log("dice value", value)
            }} />
        </div>

        <div className='d-flex justify-content-center'>
            {Action}
        </div>

        <Quit {...props} />

    </>)
}

export const name = "lucky-xmass"
