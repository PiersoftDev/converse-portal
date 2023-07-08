import styled from 'styled-components'

const DummyPurchaseOrderTab = ({ content }) => {
  return (
    <Wrapper>
      <h5>{content}</h5>
    </Wrapper>
  )
}
export default DummyPurchaseOrderTab

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`
