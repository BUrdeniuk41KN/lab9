import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TraficLight.css'

const TraficLight = (props) => {
    const typeOBJ = useSelector(state => state.StatusBarState.toggleTraficType);
    const colorSelected = useSelector(state => state.StatusBarState.colorNowSelected);
    

    const brightnessStore = parseFloat(useSelector(state => state.HeaderState.brightness)) / 100;
    const trasition_time_Store = parseFloat(useSelector(state => state.HeaderState.trasition_time)) ;
    const delayStore = parseFloat(useSelector(state => state.HeaderState.TIME));

    let tlContoroller = props.tlContoroller;
    let type = "vertical";

    const id_red = "color_red";
    const id_yelow = "color_yelow";
    const id_green = "color_green";
    const [red_blink, setRed_blink] = useState(false);
    const [yelow_blink, setYelow_blink] = useState(false);
    const [green_blink, setGreen_blink] = useState(false);

    let Rid_red = "color_red";
    let Rid_yelow = "color_yelow";
    let Rid_green = "color_green";

    const id_active = "_Active";

   
    switch (colorSelected) {
        case "red":
            Rid_red = id_red + id_active;
            break;
        case "yelow":
            Rid_yelow = id_yelow + id_active;
            break;

        case "green":
            Rid_green = id_green + id_active;
            break;
    }


    switch (typeOBJ) {
        case true:
            type = "vertical";
            break;
        case false:
            type = "horizontal";
            break;

    }

    const hlClick = (id_color) => {    
        switch(id_color){
            case 0:
                setRed_blink(true);
                setYelow_blink(false);
                setGreen_blink(false);
                console.log(Rid_red);
                break;
            case 1:
                setRed_blink(false);
                setYelow_blink(true);
                setGreen_blink(false);
                console.log(Rid_yelow);
                break;
            case 2:
                setRed_blink(false);
                setYelow_blink(false);
                setGreen_blink(true);
                console.log( Rid_green);
                break;
           }
        console.log(brightnessStore);
        document.documentElement.style.setProperty(
            '--opacity-background-color', brightnessStore, 
        '--time-trasition', trasition_time_Store+"s", 
        '--time-animation', delayStore+"s");

    }

    useEffect(() => {

    }, [brightnessStore])

    return (
        <div className='container_t'>
            <p> </p>
            <p> </p>
            <div className="contain_trafic" >
                <div className={"trafic trafic_" + type}>
                    <div onClick={() => hlClick(0)} className={'colors ' + Rid_red + (red_blink === true ? ' AnimationClickTrafic' : '') }></div>
                    <div onClick={() => hlClick(1)} className={'colors ' + Rid_yelow + (yelow_blink === true ? ' AnimationClickTrafic' : '')} ></div>
                    <div onClick={() => hlClick(2)} className={'colors ' + Rid_green + (green_blink === true ? ' AnimationClickTrafic' : '')} ></div>
                </div>
                {tlContoroller != null ? <div className='Controller_conteiner'>{tlContoroller}</div> : <p>Contoroller none active:</p>}
            </div>

        </div>
    );
}

export default TraficLight;
