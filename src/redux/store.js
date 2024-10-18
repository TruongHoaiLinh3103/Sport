import { combineReducers } from "redux";
import rootSport from "./reduccer/rootSport";

const rootReducer = combineReducers({
    sport : rootSport
})

export default rootReducer;