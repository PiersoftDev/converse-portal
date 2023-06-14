import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'
import styled from 'styled-components'
import ItemsComponent from './OrderTabs/ItemsComponent'
import TaxHoldingComponent from './TaxAndHoldingTab/TaxHoldingComponent'
import TermsAndConditionsComponent from './TermsAndConditionsTab/TermsAndConditionsComponent'

const OrderTabsComponent = () => {
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
          {/* <Tab selectedClassName="selected-tab" className="tab">
            Overview
          </Tab> */}
          <Tab selectedClassName="selected-tab" className="tab">
            Items
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Business Partner Info
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Terms & Conditions
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Tax and Holding
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Notes
          </Tab>
        </TabList>
        {/* <TabPanel className="tab-panel">
          <h4>Overview</h4>
        </TabPanel> */}
        <TabPanel>
          <ItemsComponent />
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Business Partner Info</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
         <TermsAndConditionsComponent/>
        </TabPanel>
        <TabPanel className="tab-panel">
          <TaxHoldingComponent />
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Notes</h4>
        </TabPanel>
      </Tabs>
    </Wrapper>
  )
}
export default OrderTabsComponent

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
