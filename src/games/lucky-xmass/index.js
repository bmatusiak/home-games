import React from 'react';
import { useState } from "react";

import { Button } from 'react-bootstrap';

const gamesList = [
    { name: "lucky-xmass" }
]

export const View = (props) => {
    return (<div className='d-flex justify-content-center'>
        <Button variant="primary" onClick={() => {
            if (props.onQuit) props.onQuit();
        }}>Play (lucky-xmass) Now</Button>
    </div>)
}

export const name = "lucky-xmass"
