import styled from 'styled-components'

import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import {
  FiltersComponent,
  CardsContainer,
  MaterialPageItems,
} from '../../components/materialsPage'

import { HeaderComponent } from '../../components/materialsPage'

const Materials = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper>
      <HeaderComponent />
      <FiltersComponent />
      <div className="materials-container">
        <MaterialPageItems />
        <CardsContainer />
      </div>
    </Wrapper>
  )
}
export default Materials

const Wrapper = styled.div`
  overflow: scroll;
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  padding: 3rem;

  .materials-container {
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap: 1rem;
  }
`
