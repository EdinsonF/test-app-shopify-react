import React, { createContext, useContext , useReducer} from 'react'
import taskReducer from '../reducer/taskReducer';
import { type } from '../types/type';

export const TaskContext = createContext();

const { eventIncreseam } = type;

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
    console.log("llega");
    dispatch({
      type : eventIncreseam
    })
  }

  return (
    <TaskContext.Provider 
    
      value={{
        test : state.test,
        increseamFn
      }}
    >

      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider;