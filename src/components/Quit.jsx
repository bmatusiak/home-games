import React from 'react';
import { Button } from 'react-bootstrap';

const Quit = (props) => {
    return <div style={{
        position: "fixed",
        bottom: 0,
        right: 0
    }}>
        <div>
            <Button variant="danger" onClick={() => {
                if (props.onQuit) props.onQuit();
            }}>{props.title||"Quit"}</Button>
        </div>
    </div>
}

export default Quit