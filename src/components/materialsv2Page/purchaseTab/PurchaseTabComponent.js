import { useState } from 'react'
import styled from 'styled-components'
import purchaseordertabs from '../../../assets/data/purchaseOrdertabs'

const PurchaseTabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(1)

  let { component: tabContent } = purchaseordertabs.find(
    ({ id }) => id === selectedTab
  )

  return (
    <Wrapper>
      <div className="header">
        <h4>Orders</h4>
      </div>

      <div className="tabs-component">
        <ul className="tabs-container">
          {purchaseordertabs.map(({ id, tabName }) => {
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
export default PurchaseTabComponent

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
    font-size: 1.5rem;
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
    font-size: 1rem;
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
