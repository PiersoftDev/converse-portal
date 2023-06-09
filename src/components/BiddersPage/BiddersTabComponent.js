import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'
import styled from 'styled-components'
import { ItemsComponent } from './tabComponents'

const BiddersTabComponent = () => {
  const [index, setIndex] = useState(0)
  return (
    <Wrapper>
      <Tabs
        defaultIndex={0}
        onSelect={(index) => setIndex(index)}
        // focusTabOnClick=false
        className="tabs-container"
      >
        <TabList className="account-tabs">
          <Tab selectedClassName="selected-tab" className="tab">
            Items
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Criteria
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Negotiations
          </Tab>
        </TabList>
        <TabPanel>
          <ItemsComponent />
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Criteria</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Negotiations</h4>
        </TabPanel>
      </Tabs>
    </Wrapper>
  )
}
export default BiddersTabComponent

const Wrapper = styled.div`
  .tabs-container {
    overflow: scroll;
  }

  .account-tabs {
    position: sticky;
    display: flex;
    top: 0rem;
    gap: 2rem;
    color: var(--grey-500);
    cursor: pointer;
    background-color: var(--white);
    padding-left: 2rem;
    box-shadow: var(--shadow-1);
    width: 100%;
  }
  .selected-tab {
    color: var(--primary-500);
    border-bottom: 2px solid var(--primary-500);
  }

  .tab {
    color: var(--grey-400);
    font-weight: 600;
    padding-bottom: 1rem;
  }

  .tab-panel h4 {
    text-align: center;
    color: var(--grey-600);
    margin-top: 5rem;
  }
`
