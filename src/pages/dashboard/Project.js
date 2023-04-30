import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  ProjectImpInfoComponent,
  ProjectTabsComponent,
} from '../../components/projectPage'

const Projects = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper className="Projects-page">
      <div className="header">
        <h4>Projects page nav header</h4>
      </div>
      <ProjectImpInfoComponent />
      <ProjectTabsComponent />
    </Wrapper>
  )
}
export default Projects

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr;

  .header h4 {
    color: var(--grey-600);
    background-color: var(--white);
    padding: 2rem;
    margin-bottom: 0;
  }
`
