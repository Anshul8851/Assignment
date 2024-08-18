import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "../Slices/cardSlice";

const rootReducer = combineReducers({
    card:cardReducer
})

export default rootReducer