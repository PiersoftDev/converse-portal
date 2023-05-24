import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  BiddersImpInfoComponent,
  BiddersTabComponent,
} from '../../components/BiddersPage'
const Bidders = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper>
      <div className="header">
        <h4>Bidders</h4>
      </div>
      <BiddersImpInfoComponent />
      <BiddersTabComponent />
    </Wrapper>
  )
}
export default Bidders

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr;

  .header h4 {
    color: var(--grey-600);
    background-color: var(--white);
    padding: 2rem;
    margin-bottom: 0;
  }
`
