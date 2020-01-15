import {combineReducers, createStore} from "redux";

import someDataReducers from "./reducers/someData";

const allReducers = combineReducers({
    someData: someDataReducers,

});

export default createStore(allReducers);
