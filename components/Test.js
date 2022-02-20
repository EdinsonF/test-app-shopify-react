import  Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { useTask  } from './stateGlobal/context/taskContext';

const Test = () => {

  const { test , increseamFn } = useTask();

  const router = useRouter();

  console.log(test);
  return (
    <>
    
      <div>this is my test component</div>
      <Link href="/new"><a> ir a otra pagina</a></Link>
      <button type="button" onClick={ increseamFn }>{ test }</button>
    </>

  )
}

export default Test