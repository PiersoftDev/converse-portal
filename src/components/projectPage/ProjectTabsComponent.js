import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'
import ItemsComponent from './tabcomponents/ItemsComponent'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import BiddersTabComponent from './biddersTab/BiddersTabComponent'
import PriceComparisonComponent from './comparisonsTab/PriceComparisonComponent'
import NegotiationsComponent from './negotiationsTab/NegotiationsComponent'

const ProjectTabsComponent = ({ rfqId }) => {
  const [addingAllItemsLoading, setAddingAllItemsLoading] = useState(false)

  const [selectedTab, setSelectedTab] = useState(1)

  const rfqDetailsTabs = [
    {
      id: 1,
      tabName: 'Items',
      component: (
        <ItemsComponent
          rfqId={rfqId}
          loading={addingAllItemsLoading}
          setLoading={setAddingAllItemsLoading}
        />
      ),
    },
    {
      id: 2,
      tabName: 'Criteria',
      component: 'dummy Criteria',
    },
    {
      id: 3,
      tabName: 'Bidders',
      component: <BiddersTabComponent rfqId={rfqId} />,
    },
    {
      id: 4,
      tabName: 'Price Comparisons',
      component: <PriceComparisonComponent />,
    },
    {
      id: 5,
      tabName: 'Negotiations',
      component: <NegotiationsComponent />,
    },
    {
      id: 6,
      tabName: 'Approvals',
      component: 'dummy approvals',
    },
    {
      id: 7,
      tabName: 'Conversion Details',

      component: 'dummy conversion details',
    },
  ]

  let { component: tabContent } = rfqDetailsTabs.find(
    ({ id }) => id === selectedTab
  )

  return (
    <Wrapper>
      <ul className="tabs-container">
        {rfqDetailsTabs.map(({ id, tabName }) => {
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

      {addingAllItemsLoading && (
        <div className="loading-overlay">
          <div className="loading-container">
            <ReactLoading
              type="balls"
              color="var(--grey-500)"
              height={50}
              width={50}
            />
            <h4>Adding all items to add items list</h4>
          </div>
        </div>
      )}
    </Wrapper>
  )
}
export default ProjectTabsComponent

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: scroll;

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
