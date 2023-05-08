import RotateLeftIcon from '@mui/icons-material/RotateLeft'

import styled from 'styled-components'

const DetailsComponent = ({ detailsComponentValues }) => {
  const {
    projectDesc,
    activityDesc,
    createdDate,
    budgetedQty,
    inventory,
    procurredTillDate,
    variance,
  } = detailsComponentValues

  return (
    <Wrapper>
      <div className="detail-column column-1">
        <div className="detail-header">Project :</div>
        <div className="detail-value">{projectDesc || 'Default value'}</div>

        <div className="detail-header">Activity :</div>
        <div className="detail-value">{activityDesc || 'Default value'}</div>

        <div className="detail-header">Created Date :</div>
        <div className="detail-value">{createdDate || 'Default value'}</div>
      </div>

      <div className="detail-column">
        <div className="detail-header">Budgeted Quantity :</div>
        <div className="detail-value">{budgetedQty || 'Default value'}</div>

        <div className="detail-header">Inventory :</div>
        <div className="detail-value avail-inventory">
          {inventory || 'Default value'}
          <span className="refresh-icon">
            <RotateLeftIcon style={{ fontSize: '1.2rem' }} />
          </span>
        </div>

        <div className="detail-header">Procurred till date :</div>
        <div className="detail-value">
          {procurredTillDate || 'Default value'}
        </div>
      </div>
      <div className="detail-column column-3">
        <div className="detail-header">Created by :</div>
        <div className="detail-value">{'Default value'}</div>

        <div className="detail-header">Current Price :</div>
        <div className="detail-value">
          <span>&#x20B9;</span> {'Default value'}
        </div>

        <div className="detail-header">Variance :</div>
        <div className="detail-value">{variance || 'Default value'} </div>
      </div>
    </Wrapper>
  )
}
export default DetailsComponent

const Wrapper = styled.div`
  border-top: 1px solid var(--grey-50);
  padding-top: 1rem;
  padding-right: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-left: 1rem;
  font-size: 0.9rem;
  padding-bottom: 0.25rem;

  .detail-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.25rem 3rem;
  }

  .column-1 {
    gap: 0.25rem 0;
  }

  .column-3 {
    justify-content: space-between;
  }

  .column-3 .detail-header {
    gap: 0;
  }

  .detail-header {
    color: var(--grey-500);
  }

  .detail-value {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .avail-inventory {
    position: relative;
    top: -0.2rem;
  }

  .refresh-icon {
    margin: 0 0.4rem;
    color: rgba(224, 73, 3, 0.964);
    transition: var(--transition);
    cursor: pointer;
  }
`
