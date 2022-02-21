import { Heading, Page } from '@shopify/polaris';
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
    <Page >
    <Heading >
   
      <Link href="/new"><a> ir a otra pagina</a></Link>
      <button type="button" onClick={ increseamFn }>{ test }</button>
    </Heading>
    </Page>
    
      
    </>

  )
}

export default Test