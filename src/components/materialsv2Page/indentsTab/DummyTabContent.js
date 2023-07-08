import styled from 'styled-components'

const DummyTabContent = ({ content }) => {
  return (
    <Wrapper>
      <h4>{content}</h4>
    </Wrapper>
  )
}
export default DummyTabContent

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`
