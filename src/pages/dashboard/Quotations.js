import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { QuoteCardComponent } from '../../components/QuotationsPage'

const Quotations = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper className="quotations-page">
      {/* <h3 className="header">Quotations page nav header</h3> */}

      <div className="content-header">
        <div className="left-wrapper">
          <h3>Quotations</h3>
          <p>All Quotations in current month</p>
        </div>
        <span className="add-card">
          <AiOutlinePlus />
        </span>
      </div>

      <div className="filters">
        <div className="filter">
          <p>All</p>
          <span>100</span>
        </div>
        <div className="filter">
          <p>Created</p>
          <span>25</span>
        </div>
        <div className="filter selected">
          <p>In Progress</p>
          <span>25</span>
        </div>
        <div className="filter">
          <p>Negotiation</p>
          <span>25</span>
        </div>
        <div className="filter">
          <p>Converted</p>
          <span>25</span>
        </div>
      </div>

      <div className="cards-container">
        <QuoteCardComponent />
        <QuoteCardComponent />
        <QuoteCardComponent />
        <QuoteCardComponent />
        <QuoteCardComponent />
        <QuoteCardComponent />
        <QuoteCardComponent />
      </div>
    </Wrapper>
  )
}
export default Quotations

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  /* padding: 2rem 3rem; */
  width: 100%;
  height: 100%;
  overflow: scroll;

  .header {
    padding: 1rem 0;
    border-bottom: 1px solid var(--grey-100);
    margin-bottom: 1rem;
    color: var(--grey-700);
  }

  .content-header {
    padding: 1rem 0;
    /* border-bottom: 1px solid var(--grey-100); */
    box-shadow: var(--shadow-1);
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
  }

  .left-wrapper h4 {
    margin-bottom: 0;
    color: var(--grey-800);
  }

  .left-wrapper p {
    margin-bottom: 0;
    color: var(--grey-500);
    font-size: 0.9rem;
  }

  .add-card {
    background-color: var(--primary-500);
    display: grid;
    place-items: center;
    padding: 1rem;
    border-radius: 5px;
    color: var(--white);
    transition: var(--transition);
  }

  .add-card:hover {
    transform: scale(1.05);
    background-color: var(--primary-600);
  }

  .filters {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-bottom: 4rem;
    padding: 1rem 3rem;
  }

  .filter {
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
  }

  .filter p {
    color: var(--grey-700);
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 0;
  }

  .filter span {
    background-color: var(--white);
    display: grid;
    place-items: center;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 2px solid transparent;
    transition: var(--transition);
  }

  .selected span {
    color: var(--white);
    background-color: var(--primary-400);
  }

  .filter span:hover {
    color: var(--white);
    background-color: var(--primary-400);
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 4rem 2rem;
    padding: 2rem 3rem;
  }
`
