import { combineReducers, createStore } from 'redux';
import StatusBarState from './Components/StatusBar/reducerBar';
import HeaderState from './Components/Pages/HeaderReduce.jsx';

//const store = createStore(StatusBarState, HeaderState);
const RootStore = combineReducers({
    StatusBarState,
    HeaderState,
}); 

const store = createStore(RootStore);

export default store;