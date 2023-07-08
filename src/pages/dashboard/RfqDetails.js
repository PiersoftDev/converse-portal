import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  ProjectImpInfoComponent,
  ProjectTabsComponent,
} from '../../components/projectPage'
import { useLocation } from 'react-router-dom'
import {
  getPurchaseLines,
  getAddedLines,
} from '../../features/MaterialIndent/MaterialSlice'
import { useDispatch } from 'react-redux'

const RfqDetails = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const { projectId, categoryId, id } = location?.state

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  useEffect(() => {
    dispatch(getPurchaseLines({ categoryId, projectId }))
    dispatch(getAddedLines({ rfqId: id }))
  }, [])

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper>
      <div className="header">
        <h4>RFQ Details</h4>
      </div>
      <ProjectImpInfoComponent {...location.state} />
      <ProjectTabsComponent rfqId={id} />
    </Wrapper>
  )
}
export default RfqDetails

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
