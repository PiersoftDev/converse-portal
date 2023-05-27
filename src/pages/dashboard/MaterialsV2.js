import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { DragAndDropComponent } from '../../components/materialsv2Page'
import { materialv2Tabs } from '../../assets/data'

const MaterialsV2 = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  const [selectedTab, setSelectedTab] = useState(1)

  let { component: tabContent } = materialv2Tabs.find(
    ({ id }) => id === selectedTab
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper>
      <div className="header">
        <h4>Material Indent</h4>
      </div>

      <div className="tabs-component">
        <ul className="tabs-container">
          {materialv2Tabs.map(({ id, tabName }) => {
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
      </div>
    </Wrapper>
  )
}
export default MaterialsV2

const Wrapper = styled.div`
  background-color: var(--white);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100%;
  color: var(--grey-400);
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  .header h4 {
    border-top-left-radius: 2rem;
    color: var(--grey-600);
    background-color: var(--white);
    font-weight: 500;
    font-size: 2rem;
    padding: 2rem 2rem;
    margin-bottom: 0;
  }

  .tabs-component {
    display: grid;
    grid-template-rows: auto 1fr;
    overflow: hidden;
  }

  .tabs-container {
    display: flex;
    gap: 2rem;
    border-bottom: 1px solid var(--grey-100);
    margin-bottom: 0;
  }

  .tab {
    font-size: 1.2rem;
    cursor: pointer;
  }

  .selected {
    color: rgb(251, 113, 30);
  }

  .selected div {
    height: 3px;
    background-color: rgb(251, 113, 30);
    border-radius: 10px;
  }
`
