import styled from 'styled-components'
const DummyTabComponent = ({ content }) => {
  return (
    <Wrapper>
      <h4>{content}</h4>
    </Wrapper>
  )
}
export default DummyTabComponent

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`
