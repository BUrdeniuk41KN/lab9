import { combineReducers, createStore } from 'redux';
import StatusBarState from './Components/StatusBar/reducerBar';
import HeaderState from './Components/Pages/HeaderReduce.jsx';

const ConfigServerJSON = {
    AddrServeConfig : "192.168.1.40:3005"
}

const ConfigServerState = (state = ConfigServerJSON, action) => {
    switch(action.type){
        default:
            return state;
    }
}

//const store = createStore(StatusBarState, HeaderState);
const RootStore = combineReducers({
    StatusBarState,
    HeaderState,
    ConfigServerState,
}); 

const store = createStore(RootStore);

export default store;