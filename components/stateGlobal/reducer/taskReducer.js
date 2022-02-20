import React from 'react'
import { type } from '../types/type';

const { eventIncreseam } = type;

const taskReducer = (state , action) => {

  switch (action.type) {

    case eventIncreseam:
      return {
        ...state,
        test: state.test+1
      }
    
    case eventDecreseam :
      return {
        ...state,
        contador: state.contador-1
      }

    case sendText:  
      return {
        ...state,
        nombre : action.payload
      }

    default:
      return state;          
  }

}

export default taskReducer