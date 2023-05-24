import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import {
  HeaderComponent,
  PaymentContainerComponent,
} from '../../components/PaymentAdvisorSlipPage'

const PaymentAdviseSlip = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper>
      <HeaderComponent />
      <PaymentContainerComponent />
    </Wrapper>
  )
}
export default PaymentAdviseSlip

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`
