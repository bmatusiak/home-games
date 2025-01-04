import React from 'react';

import { Button } from 'react-bootstrap';

import Chooser from '../components/Chooser.jsx';

const SelectGame = (props) => {
    return (<div className='d-flex justify-content-center'>
        <Chooser {...props} />
    </div>)
}

export default SelectGame