import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getPurchaseLines } from '../../features/MaterialIndent/MaterialSlice'

import {
  OrderImpInfoComponent,
  OrderTabsComponent,
} from '../../components/orderDetailsPage'

import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const OrderDetails = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const { projectId, categoryId } = location.state

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  useEffect(() => {
    dispatch(getPurchaseLines({ categoryId, projectId }))
  }, [])

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper className="Projects-page">
      <div className="header">
        <h4>Order Details</h4>
      </div>
      <OrderImpInfoComponent {...location.state} />
      <OrderTabsComponent />
    </Wrapper>
  )
}
export default OrderDetails

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
