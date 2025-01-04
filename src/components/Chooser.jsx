import React from 'react';

import { Button } from 'react-bootstrap';

const Chooser = (props) => {
    var list = props.list || [];

    return (<div className='d-flex justify-content-center'>
        {
            list.map((link, index) =>
                <Button key={index} onClick={props.onClick.bind(null, link)} variant="primary">{link.name}</Button>
                // <li key={link.endpoint}>{link.endpoint}</li>
            )
        }

    </div>)
}

export default Chooser