import { LoginForm, LoginSidebar } from '../components/login'

import styled from 'styled-components'

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginSidebar />
      <LoginForm />
    </Wrapper>
  )
}
export default LoginPage

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 9fr 11fr;
`
