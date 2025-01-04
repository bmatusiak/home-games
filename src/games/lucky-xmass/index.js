import React from 'react';
import { useState } from "react";

import { Button } from 'react-bootstrap';
import Quit from '../../components/Quit.jsx';

const gamesList = [
    { name: "lucky-xmass" }
]

function getRandomNumberBetween(min, max) {
    // Ensure that 'min' is less than or equal to 'max'
    if (min > max) {
        [min, max] = [max, min];
    }

    // Generate a random number within the range [min, max] (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const View = (props) => {

    const [result, set_result] = useState(0);

    // if (result == 0) set_result(getRandomNumberBetween(1, 6))
    return (<>
        <div className='d-flex justify-content-center'>
            <div style={{ fontSize: "xxx-large" }}>{result}</div>
        </div>
        <div className='d-flex justify-content-center'>
            {(result == 0 ? (<Button variant="primary" onClick={() => {
                set_result(getRandomNumberBetween(1, 6))
            }}>Spin</Button>) : (<Button variant="primary" onClick={() => {
                set_result(0)
            }}>Clear</Button>))}
        </div>

        <Quit {...props} />

    </>)
}

export const name = "lucky-xmass"
