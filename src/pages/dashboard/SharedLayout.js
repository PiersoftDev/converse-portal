import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import styled from 'styled-components'

const SharedLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  )
}
export default SharedLayout

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: var(--primary-900);
`
