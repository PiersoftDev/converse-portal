import { HiArrowSmRight } from 'react-icons/hi'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'

const RecentClaimsComponent = () => {
  return (
    <Wrapper>
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
              <td className="claim-status">
                <span></span> pending
              </td>
              <td>
                <button className="view-lob">View lob</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Provider visit at Intermountain medical </td>
              <td>06/19/2022</td>
              <td>$1256.00</td>
              <td className="claim-status">
                <span></span> pending
              </td>
              <td>
                <button className="view-lob">View lob</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Provider visit at Intermountain medical </td>
              <td>06/19/2022</td>
              <td>$1256.00</td>
              <td className="claim-status">
                <span></span> pending
              </td>
              <td>
                <button className="view-lob">View lob</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Wrapper>
  )
}
export default RecentClaimsComponent

const Wrapper = styled.div`
  border: 1px solid var(--grey-50);
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  .right-top-content {
    position: absolute;
    padding: 1rem;
    gap: 1rem;
    top: 0;
    right: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .right-top-content button {
    background-color: transparent;
    border: 1px solid var(--grey-50);
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: var(--primary-500);
    transition: var(--transition);
  }

  .right-top-content button:hover {
    transform: scale(1.05);
  }

  .right-top-content span {
    font-size: 0.8rem;
    justify-self: right;
  }

  .amount {
    font-size: 1.2rem !important;
    color: var(--primary-500);
  }

  h4 {
    color: var(--grey-700);
    margin-bottom: 0;
  }

  .claims-options-container {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1rem 0;
  }

  .select-element {
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    font-size: 0.9rem;
  }

  .transactions-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.2rem;
  }

  .transaction {
    position: relative;
  }

  .loading-bar {
    height: 4px;
    transition: var(--transition);
    border-radius: 5px;
  }

  @keyframes move {
    100% {
      background-position: 40px 0;
    }
  }

  .loading-bar:hover {
    transform: scaleY(2);
  }

  .loading-bar:hover .fill {
    height: 100%;

    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgba(255, 255, 255, 0.5) 5px,
      rgba(255, 255, 255, 0.5) 10px
    );

    animation: move 3s linear infinite;
    will-change: background-position;
    border-radius: 5px;
  }

  .medical {
    background-color: red;
  }

  .dental {
    background-color: gold;
  }

  .vision {
    background-color: var(--primary-500);
  }

  .pharmacy {
    background-color: rgb(12, 191, 12);
  }

  .transaction-tooltip {
    display: none;
    opacity: 0;
    transition: var(--transition);
  }

  /* .loading-bar:hover .transaction-tooltip {
  position: absolute;
  background-color: rgba(79, 68, 68, 0.8);
  color: var(--white);
  display: inline-block;
  padding: 0.1rem 0.5rem;
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-125%);
  opacity: 1;
} */

  .transaction p {
    margin-bottom: 0;
    margin-top: 1rem;
  }

  .dot {
    background-color: var(--primary-300);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    top: -3px;
  }

  .table-container {
    margin-top: 1rem;
  }

  .table {
    margin-bottom: 0;
  }

  thead {
    background-color: #f4f6f7;
  }

  th {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--grey-600);
  }

  td {
    padding-top: 1rem !important;
    padding-bottom: 0.5rem !important;
    font-size: 0.9rem;
    transition: var(--transition);
  }

  /* .plans-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-columns: repeat(6, 1fr);

    gap: 2rem;
    padding-top: 1rem;
  }*/

  /* tr:hover td {
  transform: scale(1.05);
} */

  tr:hover {
    background-color: #f7f7f7;
  }

  tr:hover td {
    transform: scale(1.05);
  }

  .view-lob {
    background-color: transparent;
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
  }

  .claim-status {
    color: rgb(233, 182, 52);
    font-weight: 600;
  }

  .claim-status span {
    display: inline-block;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: rgb(233, 182, 52);
  }
`
