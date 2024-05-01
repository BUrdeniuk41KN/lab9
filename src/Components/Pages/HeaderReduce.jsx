const initialState = {
    moreComponents: null,
    brightness: 20,
    trasition_time: 0.3,
    TIME: 1.5,
    optionsEnabled: false,
};

export const HeaderState = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MORE":
            return {...state, moreComponents: state.moreComponents = action.Component }
        case "SET_BRIGHTNESS":
            if (action.brightness > 100 || action.brightness < 0){
                return {...state, brightness: state.brightness = 100}
            }else{
                return {...state, brightness: state.brightness = action.brightness}
            }
        case "SET_TRASITION_TIME":
            if (parseFloat(action.trasition_time) < -0.1){
                return {...state, trasition_time: state.trasition_time = 0.1}
            }else{
                return {...state, trasition_time: state.trasition_time = action.trasition_time}
            }
        case "SET_TIME":
            if (parseFloat(action.TIME) < -0.1){
                return {...state, TIME: state.TIME = 0.1}
            }else{
                return {...state, TIME: state.TIME = action.TIME}
            }
        case "ENABLE_OPTIONS_TRAFIC":
            return {...state, optionsEnabled: state.optionsEnabled = state.optionsEnabled === false ? true : false}

        default:
          return state;
    }
};

export default HeaderState;