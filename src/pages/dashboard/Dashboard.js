import styled from 'styled-components'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import {
  IdCardComponent,
  ActivePlansComponent,
} from '../../components/dashboardPage'

import { Table } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'

const Dashboard = () => {
  const rfqAddItems = []
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return (
    <Wrapper>
      <div className="top-container">
        <IdCardComponent />
        <ActivePlansComponent />
      </div>
      <div className="bottom-container">
        <div className="accumulators-container">
          <h4>accumulators</h4>
          <div className="options-container">
            <select name="type" id="type" className="select-element">
              <option value="medical">Medical</option>
              <option value="dental">Dental</option>
              <option value="vision">Vision</option>
            </select>
            <select name="type" id="type" className="select-element">
              <option value="medical">John Doe</option>
              <option value="dental">Anna Hathway</option>
              <option value="vision">Tom Hanks</option>
            </select>
            <select name="type" id="type" className="select-element">
              <option value="medical">In-Network</option>
              <option value="dental">Out-of-Network</option>
              <option value="vision">Currrenlty not available</option>
            </select>
            <select name="type" id="type" className="select-element">
              <option value="medical">last 3 months</option>
              <option value="dental">last 2 months</option>
              <option value="vision">last 5 months</option>
            </select>
          </div>
          <div className="animation-container">
            <h5>animation to do</h5>
          </div>

          <div className="content">
            <h5>Deductible</h5>
            <h5>Out of pocket</h5>
            <h5>Total paid by you</h5>
          </div>
        </div>
        <div className="recent-claims-container">
          <h4>Recent claims</h4>
          <div className="right-top-content">
            <button>
              Browse More Claims
              <span>
                <HiArrowSmRight />
              </span>
            </button>

            <span>
              Total Sum : <span className="amount">$8,830</span>
            </span>
          </div>

          <div className="claims-options-container">
            <select name="type" id="type" className="select-element">
              <option value="medical">Medical</option>
              <option value="dental">Dental</option>
              <option value="vision">Vision</option>
            </select>
            <select name="type" id="type" className="select-element">
              <option value="medical">John Doe</option>
              <option value="dental">Anna Hathway</option>
              <option value="vision">Tom Hanks</option>
            </select>
            <select name="type" id="type" className="select-element">
              <option value="medical">In-Network</option>
              <option value="dental">Out-of-Network</option>
              <option value="vision">Currrenlty not available</option>
            </select>
            <select name="type" id="type" className="select-element">
              <option value="medical">last 3 months</option>
              <option value="dental">last 2 months</option>
              <option value="vision">last 5 months</option>
            </select>
          </div>

          <div className="transactions-container">
            <div className="transaction">
              <div className="loading-bar medical">
                <span className="transaction-tooltip">Medical</span>
                <div className="fill "></div>
              </div>
              <p>
                <span className="dot"> </span> Medical transactions
              </p>
            </div>
            <div className="transaction ">
              <div className="loading-bar dental">
                <div className="fill"></div>
              </div>
              <p>
                <span className="dot"> </span> Dental transactions
              </p>
            </div>
            <div className="transaction ">
              <div className="loading-bar vision">
                <div className="fill"></div>
              </div>
              <p>
                <span className="dot"> </span> Vision transactions
              </p>
            </div>
            <div className="transaction ">
              <div className="loading-bar pharmacy">
                <div className="fill"></div>
              </div>
              <p>
                <span className="dot"> </span> Pharmacy transactions
              </p>
            </div>
          </div>

          <div className="table-container">
            <Table responsive>
              <thead>
                <tr>
                  <th>s.No</th>
                  <th>Claim Description</th>
                  <th>Date</th>
                  <th>Cost</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Provider visit at Intermountain medical </td>
                  <td>06/19/2022</td>
                  <td>$1256.00</td>
                  <td>pending</td>
                  <td>View lob</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Provider visit at Intermountain medical </td>
                  <td>06/19/2022</td>
                  <td>$1256.00</td>
                  <td>pending</td>
                  <td>View lob</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Provider visit at Intermountain medical </td>
                  <td>06/19/2022</td>
                  <td>$1256.00</td>
                  <td>pending</td>
                  <td>View lob</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Dashboard

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: var(--grey-400);
  display: grid;
  grid-template-rows: auto 1fr;

  .top-container {
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
  }
`
