import styled from 'styled-components'

const HeaderComponent = () => {
  return (
    <Wrapper>
      <h4>Material Indent</h4>
      <p>
        <span>Welcome Back! </span> Sai Mahendra
      </p>
    </Wrapper>
  )
}
export default HeaderComponent

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    font-size: 2rem;
  }

  p {
    font-weight: 600;
    letter-spacing: 0.1rem;
  }

  span {
    color: var(--grey-500);
    font-weight: normal;
  }
`
