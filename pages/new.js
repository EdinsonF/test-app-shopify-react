
import { Card, Heading, Image, Page, TextContainer, Tabs } from '@shopify/polaris';
import React, {useState, useCallback} from 'react'
import NavBar from '../components/NavBar';
import { useTask } from '../components/stateGlobal/context/taskContext';
import Test from '../components/Test'


const New = () => {

const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const { test, decreseamFn } = useTask();
   const tabs = [
    {
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Accepts marketing',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Repeat customers',
      panelID: 'repeat-customers-content-1',
    },
    {
      id: 'prospects-1',
      content: 'Prospects',
      panelID: 'prospects-content-1',
    },
  ];

  return (
<>
  <NavBar newPage = {true}/>
    <div className='container'>
      <Page title="Diagnostic">
        <Heading >

          <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
              <Card.Section title={tabs[selected].content}>
                              
                { selected === 0 ? (<Test/>) : ""}
                            
              </Card.Section>
            </Tabs>
          </Card>
          <button type="button" onClick={ decreseamFn }>{ test }</button>
        

        </Heading>
      </Page>
    </div>

</>
  )
}

export default New;