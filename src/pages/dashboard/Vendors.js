import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import ReactLoading from 'react-loading'

import {
  VendorModal,
  VendorTableComponent,
  VendorHeaderComponent,
} from '../../components/vendorsPage'
import { useDispatch, useSelector } from 'react-redux'
const Vendors = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )
  const [showModal, setShowModal] = useState(false)

  const { vendorsList, isLoading, isError } = useSelector(
    (store) => store.vendor
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  if (isLoading) {
    return (
      <LoadingWrapper>
        <ReactLoading
          type="balls"
          color="var(--grey-500)"
          height={50}
          width={50}
        />
      </LoadingWrapper>
    )
  }

  if (isError) {
    return (
      <ErrorWrapper>
        <h4>Something went wrong while fetching data ... </h4>
      </ErrorWrapper>
    )
  }
  return (
    <Wrapper>
      <VendorHeaderComponent setShowModal={setShowModal} />
      <VendorTableComponent vendorsList={vendorsList} />
      <VendorModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default Vendors

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100%;
`
