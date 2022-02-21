import { Navigation } from '@shopify/polaris';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { HomeMajor,AppsMajor } from '@shopify/polaris-icons';

const NavBar = ({newPage}) => {
  const router = useRouter();

  const [page, setPage] = useState(false);

useEffect(() => {
console.log(newPage);

  setPage(newPage);
}, [])

console.log(newPage);

  return (
    <div className='nav'>
      <Navigation location="/index">
      <Navigation.Section
        items={[
          {
            onClick:() =>{
              router.push('/');
            },
            label: 'Home',
            icon: HomeMajor,
            selected: false
          },
          {
            onClick:() =>{
              router.push('/new');
            },
            exactMatch: true,
            label: 'My diagnostic',
            icon: AppsMajor,
            selected: true
          }
        ]}
      />
    </Navigation>
  </div>
  )
}

export default NavBar