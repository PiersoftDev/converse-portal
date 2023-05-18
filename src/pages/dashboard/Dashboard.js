import styled from 'styled-components'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

import {
  IdCardComponent,
  ActivePlansComponent,
  AccumulatorsComponent,
  RecentClaimsComponent,
} from '../../components/dashboardPage'

import 'bootstrap/dist/css/bootstrap.css'

const Dashboard = () => {
  const rfqAddItems = []
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return (
    <Wrapper>
      <div className="top-container">
        <IdCardComponent />
        <ActivePlansComponent />
      </div>
      <div className="bottom-container">
        <AccumulatorsComponent />
        <RecentClaimsComponent />
      </div>
    </Wrapper>
  )
}
export default Dashboard

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: var(--grey-400);
  display: grid;
  grid-template-rows: auto 1fr;

  .top-container {
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
  }

  .bottom-container {
    background-color: var(--white);
    padding: 1rem 3rem;
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 1.5rem;
  }
`
