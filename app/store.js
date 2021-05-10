import {configureStore} from "@reduxjs/toolkit"
import {chessReducer} from "./reducers/chess";
export const store = configureStore({reducer: chessReducer})