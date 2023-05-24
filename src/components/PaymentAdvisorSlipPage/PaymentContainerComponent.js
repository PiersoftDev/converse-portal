import styled from 'styled-components'
import { useState } from 'react'
import PaymentAdviceContainerComponent from './PaymentAdviceContainerComponent'
import DetailsContainerComponent from './DetailsContainerComponent'

const PaymentContainerComponent = () => {
  const [openDetails, setOpenDetails] = useState(false)
  return (
    <Wrapper>
      <PaymentAdviceContainerComponent
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
      <DetailsContainerComponent openDetails={openDetails} />
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
