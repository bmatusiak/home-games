import React from 'react';
import { useState } from "react";

import { Button } from 'react-bootstrap';

import SelectGame from './SelectGame.jsx';
import { gamesList } from '../games';
const _gamesList = {};
gamesList.forEach((value) => {
    _gamesList[value.name] = value.View;
})

const HomeGamesIntro = () => {

    const [selected, set_Selected] = useState("");
    if (selected == "GamesList")
        return (<SelectGame
            list={gamesList}
            onQuit={() => {
                set_Selected("");
            }}
            onClick={(listItem) => {
                set_Selected(listItem.name);
            }}
        />);

    if (selected == "")
        return (<>
            <div className='d-flex justify-content-center'>
                <h1>Brad's House Games!</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant="primary" onClick={() => {
                    set_Selected("GamesList");
                }}>Play Now</Button>
            </div>
        </>)


    if (selected && _gamesList[selected]) {
        var View = _gamesList[selected];
        return (<View onQuit={() => {
            set_Selected("");
        }}></View>)
    }
}

export default HomeGamesIntro