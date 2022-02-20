import React from 'react'
import { useTask } from '../components/stateGlobal/context/taskContext';
const New = () => {

  const { test, decreseamFn } = useTask();

  return (
    <>
    
      <div>New is page redirected</div>
      <button type="button" onClick={ decreseamFn }>{ test }</button>
    </>

  )
}

export default New;