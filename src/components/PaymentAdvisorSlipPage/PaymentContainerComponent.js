import styled from 'styled-components'
import { useState } from 'react'
import PaymentAdviceContainerComponent from './PaymentAdviceContainerComponent'
import BpDetailsComponent from './BpDetailsComponent'
import BpAccountDetails from './BpAccountDetails'
import { useEffect } from 'react'
import GrnDetailsComponent from './GrnDetailsComponent'
import InvoiceDetailsComponent from './InvoiceDetailsComponent'
import PoWoDetailsComponent from './PoWoDetailsComponent'

const initialState = {
  BpAccount: false,
  BpDetails: false,
  GrnDetails: false,
  InvoiceDetails: false,
  PoWoDetails: false,
}

const PaymentContainerComponent = () => {
  const [openDetails, setOpenDetails] = useState(false)

  const [detailsComponent, setDetailsComponent] = useState(initialState)

  useEffect(() => {
    console.log(detailsComponent)
  }, [detailsComponent])

  return (
    <Wrapper>
      <PaymentAdviceContainerComponent
        detailsComponent={detailsComponent}
        setDetailsComponent={setDetailsComponent}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
      {detailsComponent.BpAccount && (
        <BpAccountDetails
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      )}
      {detailsComponent.BpDetails && (
        <BpDetailsComponent
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      )}
      {detailsComponent.GrnDetails && (
        <GrnDetailsComponent
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      )}
      {detailsComponent.InvoiceDetails && (
        <InvoiceDetailsComponent
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      )}
      {detailsComponent.PoWoDetails && (
        <PoWoDetailsComponent
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      )}
    </Wrapper>
  )
}
export default PaymentContainerComponent

const Wrapper = styled.div`
  background-color: var(--white);
  margin: 2rem 3rem;
  border-radius: 10px;
  box-shadow: var(--shadow-1);
  overflow: hidden;
`
