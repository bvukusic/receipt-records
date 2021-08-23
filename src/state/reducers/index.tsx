import { combineReducers } from "redux";
import receiptsReducer from "./receiptsReducer";

const reducers = combineReducers({
    receipts: receiptsReducer,
});

export default reducers;