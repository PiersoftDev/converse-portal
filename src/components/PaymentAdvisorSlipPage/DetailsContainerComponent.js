import styled from 'styled-components'

const DetailsContainerComponent = ({ openDetails }) => {
  return (
    <Wrapper
      className={
        openDetails ? 'details-container' : 'details-container details-hide'
      }
    >
      <div className="details-header">
        <h4>BP Details</h4>
      </div>
      <div className="details-content-container">
        <div className="details-left-wrapper">
          <div className="details-content">
            <p>BP Code : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>BP Name : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>BP Address : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>BP Roles : </p>
            <div className="details-content-value"></div>
          </div>
        </div>
        <div className="details-right-wrapper">
          <div className="details-content">
            <p>ADhaar Details : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>Pan Details : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>GST Details : </p>
            <div className="details-content-value"></div>
          </div>
          <div className="details-content">
            <p>Bank Details : </p>
            <div className="details-content-value"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default DetailsContainerComponent

const Wrapper = styled.div`
  .details-header {
    border-bottom: 1px solid var(--grey-100);
    display: inline-block;
  }

  .details-header h4 {
    color: var(--grey-800);
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
