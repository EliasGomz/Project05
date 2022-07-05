import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../../features/counter'
import { combineReducers } from 'redux';



const store = configureStore({
  reducer: counterSlice,
  
})

export default store;
