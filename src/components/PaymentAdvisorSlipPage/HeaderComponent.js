import { BsFillPlusCircleFill } from 'react-icons/bs'

import styled from 'styled-components'

const HeaderComponent = () => {
  return (
    <Wrapper className="header">
      <h4>Payment Advice Slip</h4>

      <div className="info-container">
        <div className="header-info">
          <div className="info">
            <p>Site Code :</p>
            <div className="info-value">#123edfgh</div>
          </div>
          <div className="info">
            <p>Site Name :</p>
            <div className="info-value">Area 52</div>
          </div>
          <div className="info">
            <p>Advice Slip No:</p>
            <div className="info-value">12345</div>
          </div>
          <div className="info">
            <p>Advice Date :</p>
            <div className="info-value">28/08/2023</div>
          </div>
        </div>

        <div className="btns-container">
          <button>
            <span>
              <BsFillPlusCircleFill />
            </span>
            Create
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default HeaderComponent

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 2rem 3rem;
  padding-bottom: 1rem;
  box-shadow: var(--shadow-1);

  .info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .header-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .info p {
    margin-bottom: 0;
  }

  .info-value {
    background-color: var(--grey-400);
    border-radius: 5px;
    color: var(--white);
    padding: 0.1rem 0.4rem;
    font-size: 0.9rem;
  }

  .btns-container button {
    background-color: transparent;
    border: 1px solid var(--grey-100);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .btns-container button span {
    margin-right: 0.25rem;
    position: relative;
    top: -1px;
  }

  .btns-container button:hover {
    transform: scale(1.05);
    background-color: var(--grey-50);
    border: 1px solid var(--grey-200);
  }
`
