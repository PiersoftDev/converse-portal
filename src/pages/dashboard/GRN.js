import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const GRN = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper>
      <h2>GRN page not yet implemented</h2>
    </Wrapper>
  )
}
export default GRN

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--grey-400);

  h2 {
    letter-spacing: 0.1rem;
  }
`
