import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

import styled from 'styled-components'

const TaxHoldingComponent = () => {
  return (
    <Wrapper>
      <div className="top-wrapper">
        <div className="left-wrapper">
          <div className="content">
            <p>Sub total : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>SGST : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>CGST : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>IGST : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>UTGST : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>CESS : </p>
            <div className="content-value"></div>
          </div>
        </div>

        <div className="right-wrapper">
          <div className="content">
            <p>FSD HOLDINGS : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>HOLDINGS : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>LABCESS : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>ROYAL : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>CBF : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>WHWF : </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>GST HOLD : </p>
            <div className="content-value"></div>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="content-center">
          <div className="content">
            <p>GRAND TOTAL OF PO: </p>
            <div className="content-value"></div>
          </div>
          <div className="content">
            <p>GRAND TOTAL IN WORDS : </p>
            <div className="content-value"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default TaxHoldingComponent

const Wrapper = styled.div`
  margin: 2rem;
  background-color: var(--white);
  padding: 1rem;
  border-radius: 10px;
  min-height: 50rem;

  .top-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 30rem;
  }

  .left-wrapper,
  .right-wrapper {
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    gap: 0.5rem;
  }

  .content {
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
  }

  .content p {
    margin-bottom: 0;
    font-size: 1rem;
    color: var(--grey-800);
    font-weight: 400;
  }

  .content-value-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .content-value {
    background-color: var(--grey-100);
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    justify-self: left;
    width: 75%;
    min-height: 1.5rem;
    color: var(--grey-900);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .content-value p {
    text-align: center;
    margin-bottom: 0;
    font-size: 0.9rem;
    color: var(--grey-700);
  }

  .check-icon {
    font-weight: 600;
    color: green;
    display: grid;
    place-items: center;
  }

  .details-btn {
    background-color: var(--grey-600);
    /* border: 1px solid var(--grey-200); */
    border: none;

    border-radius: 5px;
    padding: 0.1rem 0.4rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--white);
    transition: var(--transition);
  }

  .details-btn span {
    display: grid;
    place-items: center;
  }

  .details-btn p {
    margin-bottom: 0;
    font-size: 0.8rem;
    color: var(--white);
  }

  .details-btn:hover {
    transform: scale(1.05);
  }

  .payable-to-value-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 75%;
  }

  .bottom-container {
    position: relative;
    left: -4rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }

  .content-center {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .content-center .content {
    gap: 3rem;
  }

  .content-center .content-value {
    width: 100% !important;
  }
`
