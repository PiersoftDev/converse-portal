import { RiShareBoxLine } from 'react-icons/ri'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const CardComponent = ({ rfq }) => {
  const { category, plannedDate, projectCode, warehouseCode } = rfq

  return (
    <Wrapper>
      <div className="card-header">
        <div className="header-left-wrapper">
          <h5>PO-0642</h5>
          <p>Active</p>
        </div>
        <NavLink
          className="project-page-icon"
          to="/rfqdetails"
          state={{
            ...rfq,
          }}
        >
          <RiShareBoxLine />
        </NavLink>
      </div>

      <div className="card-details">
        <div className="card-side-header">Project Code :</div>
        <div className="card-side-value">{projectCode}</div>
        <div className="card-side-header">Category :</div>
        <div className="card-side-value">{category}</div>
        <div className="card-side-header">Planned Date :</div>
        <div className="card-side-value">{`${plannedDate[2]}/${plannedDate[1]}/${plannedDate[0]}`}</div>
        <div className="card-side-header">Warehouse Code:</div>
        <div className="card-side-value"> {warehouseCode}</div>
      </div>
    </Wrapper>
  )
}
export default CardComponent

const Wrapper = styled.div`
  margin: 0.75rem 1rem;
  border: 1px solid var(--grey-100);
  padding: 1rem;
  border-radius: 0.5rem;

  .card-header {
    position: relative;
  }

  .header-left-wrapper {
    display: flex;
    gap: 1rem;
  }

  .header-left-wrapper p {
    background-color: var(--green-light);
    color: var(--green-dark);
    font-weight: 700;
    font-size: 0.55rem;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 0.3rem;
    padding-bottom: 0.2rem;
  }

  .project-page-icon {
    color: var(--grey-400);
    transition: var(--transition);
    position: absolute;
    top: 0;
    right: 0;
  }

  .project-page-icon:hover {
    color: var(--grey-700);
  }

  .card-details {
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: 3fr 5fr;
  }
  .card-side-header {
    color: var(--grey-400);
  }

  .card-side-value {
    color: var(--grey-700);
  }
`
