import React from 'react'
import { type } from '../types/type';

const { eventIncreseam, eventDecreseam } = type;


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
        test: state.test-1
      }

    default:
      return state;          
  }

}

export default taskReducer