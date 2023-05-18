import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import {
  VendorModal,
  VendorTableComponent,
  VendorHeaderComponent,
} from '../../components/vendorsPage'
const Vendors = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  const [showModal, setShowModal] = useState(false)

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return (
    <Wrapper>
      <VendorHeaderComponent setShowModal={setShowModal} />
      <VendorTableComponent />
      <VendorModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default Vendors

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100%;
`
