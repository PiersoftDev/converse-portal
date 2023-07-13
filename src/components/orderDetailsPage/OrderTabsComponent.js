import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'
import styled from 'styled-components'
import ItemsComponent from './OrderTabs/ItemsComponent'
import TaxHoldingComponent from './TaxAndHoldingTab/TaxHoldingComponent'
import TermsAndConditionsComponent from './TermsAndConditionsTab/TermsAndConditionsComponent'

const OrderTabsComponent = () => {
  const [index, setIndex] = useState(0)

  const [selectedTab, setSelectedTab] = useState(1)

  const orderDetailsTabs = [
    {
      id: 1,
      tabName: 'Overview',
      component: <h4>Overview</h4>,
    },
    {
      id: 2,
      tabName: 'Items',
      component: <ItemsComponent />,
    },
    {
      id: 3,
      tabName: 'Business Partner Info',
      component: <h4>Business partner Info</h4>,
    },
    {
      id: 4,
      tabName: 'Terms & Conditions',
      component: <TermsAndConditionsComponent />,
    },
    {
      id: 5,
      tabName: 'Tax and Holding',
      component: <TaxHoldingComponent />,
    },
    {
      id: 6,
      tabName: 'Notes',
      component: <h4>Notes</h4>,
    },
  ]

  let { component: tabContent } = orderDetailsTabs.find(
    ({ id }) => id === selectedTab
  )

  return (
    <Wrapper>
      <ul className="tabs-container">
        {orderDetailsTabs.map(({ id, tabName }) => {
          return (
            <li
              key={id}
              className={selectedTab === id ? 'tab selected' : 'tab'}
              onClick={() => setSelectedTab(id)}
            >
              <p>{tabName}</p>
              <div></div>
            </li>
          )
        })}
      </ul>

      {tabContent}
    </Wrapper>
  )
}
export default OrderTabsComponent

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow-y: auto;
  .tabs-container {
    display: flex;
    gap: 2rem;
    border-top: 1px solid var(--grey-100);
    border-bottom: 1px solid var(--grey-100);
    margin-bottom: 0;
    background-color: var(--white);
  }

  .tab {
    font-size: 1.2rem;
    cursor: pointer;
    padding-top: 1rem;
  }

  .selected {
    color: var(--primary-500);
  }

  .selected div {
    height: 3px;
    background-color: var(--primary-500);
    border-radius: 10px;
  }

  .loading-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 30;
  }

  .loading-container {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 90%;
    max-width: 50rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
