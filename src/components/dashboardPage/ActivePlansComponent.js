import styled from 'styled-components'

const ActivePlansComponent = () => {
  return (
    <Wrapper>
      <div className="plans-header">Active plans</div>
      <div className="plans-container">
        <div className="plan plan-1">
          <div className="plan-content">
            <span className="plan-type">medical</span>
            <div className="plan-name">CarePlus PHD5000</div>
            <button className="view-btn">VIEW MORE</button>
          </div>
          <div className="line"></div>
        </div>
        <div className="plan plan-2">
          <div className="plan-content">
            <span className="plan-type">Pharmacy</span>
            <div className="plan-name">CarePlus PHD5000</div>
            <button className="view-btn">VIEW MORE</button>
          </div>
          <div className="line"></div>
        </div>
        <div className="plan plan-3">
          <div className="plan-content">
            <span className="plan-type">Dental</span>
            <div className="plan-name">CarePlus PHD5000</div>
            <button className="view-btn">VIEW MORE</button>
          </div>
          <div className="line"></div>
        </div>
        <div className="plan plan-4">
          <div className="plan-content">
            <span className="plan-type">Vision</span>
            <div className="plan-name">CarePlus PHD5000</div>
            <button className="view-btn">VIEW MORE</button>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </Wrapper>
  )
}
export default ActivePlansComponent

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  .plans-header {
    font-size: 1.3rem;
    color: var(--grey-600);
    font-weight: 600;
  }

  .plans-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding-top: 1rem;
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: 1550px) {
    .plans-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media screen and (min-width: 1800px) {
    .plans-container {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  .plan {
    background-color: var(--white);
    box-shadow: var(--shadow-1);
    border-radius: 5px;
    padding: 1rem 0;
    text-align: center;
    padding-bottom: 0;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .plan-type {
    display: inline-block;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
    transition: 0.5s 0.4s ease-in-out all;
  }

  .plan-1 .plan-type {
    background-color: var(--red-light);
    color: rgb(213, 15, 15);
  }
  .plan-2 .plan-type {
    background-color: rgba(255, 215, 0, 0.4);
    color: rgb(203, 176, 25);
  }
  .plan-3 .plan-type {
    background-color: var(--primary-200);
    color: var(--primary-600);
  }
  .plan-4 .plan-type {
    background-color: #88ed8f;
    color: #2a9932;
  }

  .plan-name {
    font-size: 1.4rem;
    color: var(--grey-600);
    font-weight: 500;
    padding: 0 1rem;
    margin: 2rem 0;
  }

  .view-btn {
    background-color: transparent;
    padding: 0.4rem 1rem;
    font-size: 0.6rem;
    border-radius: 5px;
    color: var(--primary-400);
    border: 1px solid var(--grey-100);
  }

  .plan {
    position: relative;
    z-index: 1;
  }

  .plan::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    border-radius: 5px;

    z-index: -1;
    transition: transform 0.7s;
  }
  /* .plan:hover::after {
    transform: scaleY(1);
    background: var(--primary-500);
  } */

  .plan-1:hover::after {
    transform: scaleY(1);
    background: red;
  }

  .plan-2:hover::after {
    transform: scaleY(1);
    background-color: gold;
  }

  .plan-3:hover::after {
    transform: scaleY(1);
    background: var(--primary-500);
  }

  .plan-4:hover::after {
    transform: scaleY(1);
    background-color: rgb(12, 191, 12);
  }

  .plan-1:hover .plan-type {
    background-color: rgb(161, 7, 7);
    color: var(--white);
  }

  .plan-2:hover .plan-type {
    background-color: goldenrod;
    color: var(--white);
  }
  .plan-3:hover .plan-type {
    background-color: var(--primary-700);
    color: var(--white);
  }
  .plan-4:hover .plan-type {
    background-color: #2a9932;
    color: var(--white);
  }

  .plan:hover .plan-name {
    color: var(--white);
  }

  .plan:hover .view-btn {
    border: 1px solid var(--white);
    color: var(--white);
  }

  .plan-1 .line {
    height: 5px;
    background-color: red;
  }
  .plan-2 .line {
    height: 5px;
    background-color: gold;
  }
  .plan-3 .line {
    height: 5px;
    background-color: var(--primary-500);
  }
  .plan-4 .line {
    height: 5px;
    background-color: rgb(12, 191, 12);
  }
`
