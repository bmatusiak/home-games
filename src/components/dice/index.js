import React from 'react';
import { useState, useRef, useEffect, createRef } from "react";

import Dice1 from './1.png';
import Dice2 from './2.png';
import Dice3 from './3.png';
import Dice4 from './4.png';
import Dice5 from './5.png';
import Dice6 from './6.png';


function getRandomNumberBetween(min, max) {
    // Ensure that 'min' is less than or equal to 'max'
    if (min > max) {
        [min, max] = [max, min];
    }
    // Generate a random number within the range [min, max] (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spinDice() {
    return getRandomNumberBetween(1, 6);
}

export const Dice = (props) => {
    const [diceValue, set_diceValue] = useState(-1);
    if (props.value && diceValue != props.value) {
        set_diceValue(props.value);
    }

    var sideList = {
        0: "",
        1: Dice1,
        2: Dice2,
        3: Dice3,
        4: Dice4,
        5: Dice5,
        6: Dice6,
    };

    var value = sideList[diceValue];

    var imgStyle = {
        "width": "200px",
        "height": "200px",
        "margin": "80px"
    }

    const randomizer = useRef(0);

    useEffect(() => {
        randomizer.current = [setInterval(() => {
            if (!props.value)
                set_diceValue(spinDice());
        }, 100), setTimeout(() => {
            if (!props.value && props.onResult)
                props.onResult(spinDice());
        }, 1000)]
        return () => {
            clearInterval(randomizer.current[0]);
            randomizer.current = null;
        };
    }, [props.value]);

    const Img = () => {
        return <img style={imgStyle} src={value} />
    }

    return (<Img />);
}

export const Dice3D = (props) => {
    //https://codepen.io/desandro/pen/KRWjzm
    const [diceValue, set_diceValue] = useState(-1);
    if (props.value && diceValue != props.value) {
        set_diceValue(props.value);
    }

    var sideList = {
        0: "",
        1: "front",
        2: "right",
        3: "top",
        4: "bottom",
        5: "left",
        6: "back",
    };
    var cubeClassName = "cube show-" + sideList[diceValue];

    const randomizer = useRef(0);
    const cubeRef = useRef(null);

    useEffect(() => {
        randomizer.current = [setInterval(() => {
            if (!props.value)
                set_diceValue(spinDice());
        }, 100), setTimeout(() => {
            if (!props.value && props.onResult)
                props.onResult(spinDice());
        }, 1000)]
        return () => {
            clearInterval(randomizer.current[0]);
            randomizer.current = null;
        };
    }, [props.value]);

    return <>
        <style>{`
            .scene-container {
                background-image: radial-gradient(circle, rgba(86, 86, 86, 0.28) 20%, rgb(255, 255, 255) 75%);
            }

            .scene {
                width: 200px;
                height: 200px;
                // border: 1px solid #CCC;
                margin: 80px;
                perspective: 400px;  
            }

            .cube {
                width: 200px;
                height: 200px;
                position: relative;
                transform-style: preserve-3d;
                // transform: translateZ(-100px);
                transition: transform 200ms;
            }

            .cube.show-front  { transform: translateZ(-100px) rotateY(   0deg); }
            .cube.show-right  { transform: translateZ(-100px) rotateY( -90deg); }
            .cube.show-back   { transform: translateZ(-100px) rotateY(-180deg); }
            .cube.show-left   { transform: translateZ(-100px) rotateY(  90deg); }
            .cube.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
            .cube.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }

            .cube__face {
                position: absolute;
                width: 200px;
                height: 200px;
                // border: 2px solid black;
                // line-height: 200px;
                // font-size: 40px;
                // font-weight: bold;
                // color: white;
                // text-align: center;
            }

            .cube__face            { background: rgba(  255,255,255, 1);          }
            // .cube__face--front  { background: hsla(  0, 100%, 50%, 0.1); }
            // .cube__face--right  { background: hsla( 60, 100%, 50%, 0.1); }
            // .cube__face--back   { background: hsla(120, 100%, 50%, 0.1); }
            // .cube__face--left   { background: hsla(180, 100%, 50%, 0.1); }
            // .cube__face--top    { background: hsla(240, 100%, 50%, 0.1); }
            // .cube__face--bottom { background: hsla(300, 100%, 50%, 0.1); }

            .cube__face--front  { transform: rotateY(  0deg) translateZ(100px); }
            .cube__face--right  { transform: rotateY( 90deg) translateZ(100px); }
            .cube__face--back   { transform: rotateY(180deg) translateZ(100px); }
            .cube__face--left   { transform: rotateY(-90deg) translateZ(100px); }
            .cube__face--top    { transform: rotateX( 90deg) translateZ(100px); }
            .cube__face--bottom { transform: rotateX(-90deg) translateZ(100px); }

            .cube__face img {
                width: 200px;
                height: 200px;
            }
        `}</style>
        <div className='scene-container'>
            <div className="scene">
                <div className={cubeClassName} ref={cubeRef}>
                    <div className="cube__face cube__face--front"><img src={Dice1} /></div>
                    <div className="cube__face cube__face--right"><img src={Dice2} /></div>
                    <div className="cube__face cube__face--top"><img src={Dice3} /></div>
                    <div className="cube__face cube__face--bottom"><img src={Dice4} /></div>
                    <div className="cube__face cube__face--left"><img src={Dice5} /></div>
                    <div className="cube__face cube__face--back"><img src={Dice6} /></div>
                </div>
            </div>
        </div>
    </>
}

export default Dice3D