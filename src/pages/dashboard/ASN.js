import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import {
  AsnModal,
  AsnTableComponent,
  AsnHeaderComponent,
} from '../../components/AsnPage'

const ASN = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  const [showModal, setShowModal] = useState(true)

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return (
    <Wrapper>
      <AsnHeaderComponent setShowModal={setShowModal} />
      <AsnTableComponent />
      <AsnModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default ASN

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100%;
`
