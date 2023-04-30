import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'
import ItemsComponent from './tabcomponents/ItemsComponent'
import styled from 'styled-components'

const ProjectTabsComponent = () => {
  const [index, setIndex] = useState(0)
  return (
    <Wrapper>
      <Tabs
        defaultIndex={0}
        onSelect={(index) => setIndex(index)}
        focusTabOnClick="false"
        className="tabs-container"
      >
        <TabList className="account-tabs">
          <Tab selectedClassName="selected-tab" className="tab">
            Overview
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Items
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Documents
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Reports
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Compliance
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Members
          </Tab>
          <Tab selectedClassName="selected-tab" className="tab">
            Settings
          </Tab>
        </TabList>
        <TabPanel className="tab-panel">
          <h4>Overview</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <ItemsComponent />
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Iteme componsent</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Reports</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Compliance</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Members</h4>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h4>Settings</h4>
        </TabPanel>
      </Tabs>
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
  .header {
    margin-bottom: 0;
    color: var(--primary-700);
  }
  .sub-header {
    color: var(--grey-400);
    font-size: 0.9rem;
  }

  .tab {
    color: var(--grey-400);
    font-weight: 600;
    padding-bottom: 1rem;
  }
`