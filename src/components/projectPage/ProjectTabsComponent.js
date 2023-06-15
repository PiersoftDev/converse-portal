import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'
import ItemsComponent from './tabcomponents/ItemsComponent'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import BiddersTabComponent from './biddersTab/BiddersTabComponent'

const ProjectTabsComponent = ({ rfqId }) => {
  const [index, setIndex] = useState(0)

  const [addingAllItemsLoading, setAddingAllItemsLoading] = useState(false)

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
            Criteria
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Bidders
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Price Comparisons
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Negotiations
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Approvals
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Conversion Details
          </Tab>
        </TabList>
        {/* <TabPanel className="tab-panel">
          <h4>Overview</h4>
        </TabPanel> */}
        <TabPanel>
          <ItemsComponent
            rfqId={rfqId}
            loading={addingAllItemsLoading}
            setLoading={setAddingAllItemsLoading}
          />
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Criteria</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <BiddersTabComponent rfqId={rfqId} />
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Price Comparisons</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Negotiations</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Approvals</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Conversion Details</h4>
        </TabPanel>
      </Tabs>

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
