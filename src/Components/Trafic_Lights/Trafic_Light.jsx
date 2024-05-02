import React, { useEffect, useState } from 'react';
import {useSelector } from 'react-redux';
import './TraficLight.css'

const TraficLight = (props) => {
    const typeOBJ = useSelector(state => state.StatusBarState.toggleTraficType);
    const colorSelected = useSelector(state => state.StatusBarState.colorNowSelected);
    const brightnessStore = parseFloat(useSelector(state => state.HeaderState.brightness)) / 100;
    const trasition_time_Store = parseFloat(useSelector(state => state.HeaderState.trasition_time));
   
    const delayStore = parseFloat(useSelector(state => state.HeaderState.TIME));
    const [idColors] = useState(["color_red", "color_yelow", "color_green"]);

    let Rid_red = idColors[0];
    let Rid_yelow = idColors[1];
    let Rid_green = idColors[2];

    const [traficState, setTraficState] = useState([false, false, false]);

    switch (colorSelected) {
        case "red":
            Rid_red = idColors[0] + "_Active";
            break;
        case "yelow":
            Rid_yelow = idColors[1] + "_Active";
            break;

        case "green":
            Rid_green = idColors[2] + "_Active";
            break;
    }

    const hlClick = (id_color) => {
        switch (id_color) {
            case 0:
                setTraficState([true, false, false]);
                break;
            case 1:
                setTraficState([false, true, false]);
                break;
            case 2:
                setTraficState([false, false, true]);
                break;
        }
    }

    useEffect(() => {


        document.documentElement.style.setProperty('--opacity-background-color', brightnessStore);
        document.documentElement.style.setProperty('--time-trasition', trasition_time_Store + "s");
        document.documentElement.style.setProperty('--time-animation', delayStore + "s");
    }, [brightnessStore, trasition_time_Store, delayStore])

    return (
        <div className='container_t'>
            <p> </p>
            <p> </p>
            <div className="contain_trafic" >
                <div className={"trafic trafic_" + (typeOBJ ? "vertical" : "horizontal")}>
                    <div onClick={() => hlClick(0)} className={'colors ' + Rid_red + (traficState[0] === true ? ' AnimationClickTrafic' : '')}></div>
                    <div onClick={() => hlClick(1)} className={'colors ' + Rid_yelow + (traficState[1] === true ? ' AnimationClickTrafic' : '')} ></div>
                    <div onClick={() => hlClick(2)} className={'colors ' + Rid_green + (traficState[2] === true ? ' AnimationClickTrafic' : '')} ></div>
                </div>
                {props.tlContoroller != null ? <div className='Controller_conteiner'>{props.tlContoroller}</div> : <p>Contoroller none active:</p>}
            </div>

        </div>
    );
}

export default TraficLight;
