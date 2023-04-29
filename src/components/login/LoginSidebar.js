import companyLogo from '../../assets/images/logo.png'
import wallet from '../../assets/images/wallet-40.png'
import chart from '../../assets/images/chart.svg'
import donut from '../../assets/images/donut_full.png'

import styled from 'styled-components'

import CarousalComponent from './CarousalComponent'

const LoginSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-content">
        <div className="header sidebar-logo-header">
          <img src={companyLogo} alt="logo" className="company-logo" />
          CONVERSE
        </div>

        <div className="middle-content">
          <div className="card card-1">
            <img src={wallet} alt="wallet" className="wallet-img" />
            <p className="current-balance">CURRENT BALANCE</p>
            <h5 className="money">
              $ <span>24,359</span>
            </h5>
          </div>
          <div className="card card-2">
            <img src={chart} alt="chart" className="chart-img" />
          </div>
          <div className="card card-3">
            <img src={donut} alt="donut" className="donut-img" />
          </div>
        </div>

        <CarousalComponent />
      </div>
    </Wrapper>
  )
}
export default LoginSidebar

const Wrapper = styled.div`
  background-color: var(--grey-50);
  box-shadow: var(--shadow-1);
  height: 100vh;

  .sidebar-content {
    width: 80%;
    margin: 5rem auto;
    max-width: 500px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 90%;
  }

  .header {
    font-size: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0.1rem;
  }

  .company-logo {
    width: 60px;
    margin-right: 0.5rem;
    margin-bottom: -0.2rem;
  }

  .middle-content {
    position: relative;
  }

  .card {
    background-color: var(--white);
    display: inline-block;
    padding: 1rem;
    border-radius: var(--borderRadius);
  }

  .wallet-img {
    margin-top: 0.5rem;
  }

  .current-balance {
    color: var(--grey-400);
    margin-bottom: 0.5rem;
  }

  .money {
    color: var(--grey-400);
    margin-bottom: 0.5rem;
  }

  .money span {
    color: var(--primary-500);
    font-size: 2rem;
  }

  .chart-img {
    width: 140px;
    height: 140px;
  }

  .donut-img {
    height: 125px;
  }

  .card-1 {
    position: absolute;
    top: 10%;
    left: 20%;
    box-shadow: var(--shadow-1);
  }

  .card-2 {
    position: absolute;
    left: 45%;
    top: 30%;
    box-shadow: var(--shadow-1);
    z-index: 1;
  }

  .card-3 {
    position: absolute;
    top: 50%;
    left: 10%;
    box-shadow: var(--shadow-1);
  }
`
