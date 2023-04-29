import CardComponent from './CardComponent'
import styled from 'styled-components'

const CardsContainer = () => {
  return (
    <Wrapper>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Wrapper>
  )
}
export default CardsContainer

const Wrapper = styled.div`
  background-color: var(--white);
  margin-top: 0.5rem;
  border-radius: 1rem;
  padding-top: 0.25rem;
`
