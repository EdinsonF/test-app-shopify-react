import React, { createContext, useContext , useReducer} from 'react'
import taskReducer from '../reducer/taskReducer';
import { type } from '../types/type';

export const TaskContext = createContext();

const { eventIncreseam, eventDecreseam } = type;

export const useTask = () => {
  const context = useContext(TaskContext);
  return context;
}



/* PROVIDER */
const TaskProvider = ({ children }) => {
  
  const initialState = {
    test: 0
  }

  const [state, dispatch] = useReducer(taskReducer, initialState);

  /* function dispacher */
  const increseamFn = () => {
    dispatch({
      type : eventIncreseam
    })
  }

  const decreseamFn = () => {
    dispatch({
      type : eventDecreseam
    })
  }

  return (
    <TaskContext.Provider 
    
      value={{
        test : state.test,
        increseamFn,
        decreseamFn
      }}
    >

      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider;