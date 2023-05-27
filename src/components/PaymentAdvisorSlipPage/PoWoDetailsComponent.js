import styled from 'styled-components'

const PoWoDetailsComponent = ({ openDetails, setOpenDetails }) => {
  return (
    <Wrapper
      className={
        openDetails ? 'details-container' : 'details-container details-hide'
      }
    >
      <div className="details-header">
        <h4>PO / WO Details</h4>
        <button onClick={() => setOpenDetails(false)}>Close</button>
      </div>
      <div className="details-content-container">
        <div className="details-left-wrapper">
          <div className="details-content">
            <p>PO / WO No. : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>PO / WO Date : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>Towards BP: </p>
            <div className="details-content-value"></div>
          </div>
        </div>
        <div className="details-right-wrapper">
          <div className="details-content">
            <p>Towards Materials : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>Terms and Conditions: </p>
            <div className="details-content-value"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default PoWoDetailsComponent

const Wrapper = styled.div`
  height: 35%;
  padding: 1rem;
  padding-top: 0;
  display: grid;
  grid-template-rows: auto 1fr;

  &.details-hide {
    display: none;
  }

  .details-header {
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .details-header h4 {
    color: var(--grey-800);
    margin-bottom: 0;
  }

  .details-header button {
    background-color: transparent;
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    margin-right: 2rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
    transition: var(--transition);
  }

  .details-header button:hover {
    transform: scale(1.1);
    background-color: var(--red-light);
    color: var(--red-dark);
    border: 1px solid var(--red-light);
  }

  .details-content-container {
    display: grid;
    grid-template-columns: 30% 30%;
    gap: 4rem;
  }

  .details-left-wrapper,
  .details-right-wrapper {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
  }

  .details-content {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }

  .details-content p {
    margin-bottom: 0;
    font-size: 1rem;
  }

  .details-content-value {
    background-color: var(--grey-100);
    border-radius: 5px;
    padding: 0.1rem 0.3rem;
    color: var(--grey-800);
    font-size: 0.9rem;
    text-align: center;
  }
`
