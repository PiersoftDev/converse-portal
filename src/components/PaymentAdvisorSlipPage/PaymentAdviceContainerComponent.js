import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

import styled from 'styled-components'

const BP_ACCOUNT_BTN = 'BpAccount'
const BP_DETAILS_BTN = 'BpDetails'
const GRN_DETAILS_BTN = 'GrnDetails'
const INVOICE_DETAILS_BTN = 'InvoiceDetails'
const PO_WO_DETAILS_BTN = 'PoWoDetails'

const baseState = {
  BpAccount: false,
  BpDetails: false,
  GrnDetails: false,
  InvoiceDetails: false,
  PoWoDetails: false,
}

const PaymentAdviceContainerComponent = ({
  openDetails,
  setOpenDetails,
  detailsComponent,
  setDetailsComponent,
}) => {
  const handleClick = (btn) => {
    setOpenDetails(true)

    setDetailsComponent({ ...baseState, [btn]: true })
  }

  return (
    <Wrapper
      className={
        openDetails
          ? 'payment-advice-container open-details'
          : 'payment-advice-container'
      }
    >
      <div className="left-wrapper">
        <div className="content">
          <p>Payment Against : </p>
          <div className="content-value">
            <p> Bill / Advance</p>
            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Payment To be Made At : </p>
          <div className="content-value">
            <p> Head office / Site office</p>
            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Payable to: </p>
          <div className="content-value-container">
            <div className="payable-to-value-container">
              <div className="content-value">
                <p> BP Code </p>
                <span className="check-icon">
                  <BsCheckCircle />
                </span>
              </div>
              <div className="content-value">
                <p> BP Name</p>
                <span className="check-icon">
                  <BsCheckCircle />
                </span>
              </div>
            </div>

            <button
              className="details-btn"
              onClick={() => handleClick(BP_DETAILS_BTN)}
            >
              <span>
                <AiOutlineSearch />
              </span>
              <p>Details</p>
            </button>
          </div>
        </div>
        <div className="content">
          <p>GST details: </p>
          <div className="content-value">
            <p> Fetch from ln and check with invoice</p>
            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Invoice / Bill No : </p>
          <div className="content-value-container">
            <div className="content-value">
              <p> Manual entry from submitted invoice </p>
              <span className="check-icon">
                <BsCheckCircle />
              </span>
            </div>
            <button
              className="details-btn"
              onClick={() => handleClick(INVOICE_DETAILS_BTN)}
            >
              <span>
                <AiOutlineSearch />
              </span>
              <p>Details</p>
            </button>
          </div>
        </div>
        <div className="content">
          <p>PO/WO No. : </p>
          <div className="content-value-container">
            <div className="content-value">
              <p> Fetch from LN and check with invoice against po issued </p>
              <span className="check-icon">
                <BsCheckCircle />
              </span>
            </div>
            <button
              className="details-btn"
              onClick={() => handleClick(PO_WO_DETAILS_BTN)}
            >
              <span>
                <AiOutlineSearch />
              </span>
              <p>Details</p>
            </button>
          </div>
        </div>
        <div className="content">
          <p>Trips Abstract / GRN No : </p>
          <div className="content-value-container">
            <div className="content-value">
              <p> Fetch from LN </p>
              <span className="check-icon">
                <BsCheckCircle />
              </span>
            </div>
            <button
              className="details-btn"
              onClick={() => handleClick(GRN_DETAILS_BTN)}
            >
              <span>
                <AiOutlineSearch />
              </span>
              <p>Details</p>
            </button>
          </div>
        </div>
        <div className="content">
          <p>DC No. : </p>
          <div className="content-value">
            <p> Fetch from LN</p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Batch No : </p>
          <div className="content-value">
            <p> Fetch from LN</p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Towards :</p>
          <div className="content-value">
            <p> Fetch from LN</p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Track Details : </p>
          <div className="content-value">
            <p> Fetch from LN</p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="right-wrapper">
        <div className="content">
          <p>Bp Account Details : </p>
          <div className="content-value-container">
            <div className="content-value">
              <p> Fetch from ln from BP tables</p>
              <span className="check-icon">
                <BsCheckCircle />
              </span>
            </div>
            <button
              className="details-btn"
              onClick={() => handleClick(BP_ACCOUNT_BTN)}
            >
              <span>
                <AiOutlineSearch />
              </span>
              <p>Details</p>
            </button>
          </div>
        </div>
        <div className="content">
          <p>Basic Amount : </p>
          <div className="content-value-container">
            <div className="content-value">
              <p> Amount from invoice </p>
              <span className="check-icon">
                <BsCheckCircle />
              </span>
            </div>
            <button className="details-btn">
              <span>
                <AiOutlineSearch />
              </span>
              <p>Details</p>
            </button>
          </div>
        </div>
        <div className="content">
          <p>Gross Amount : </p>
          <div className="content-value">
            <p> Amount from invoice</p>
            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Tax code | TDS @ % : </p>
          <div className="content-value">
            <p> Tax code from infor</p>
            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>GST : </p>
          <div className="content-value">
            <p> GST from invoice </p>
            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p> TDS: </p>
          <div className="content-value">
            <p> TDS from invoice</p>
            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>{`Additional (if any) :`} </p>
          <div className="content-value">
            <p> Additional Information based on terms and conditions</p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Net payable to vendor : </p>
          <div className="content-value">
            <p>
              Auto calculate from above fields and check amount from invoice
            </p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Total approved amount: </p>
          <div className="content-value">
            <p> Corrected filed by the approver</p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
        <div className="content">
          <p>Rupees in words :</p>
          <div className="content-value">
            <p>Auto generation from approved amount</p>

            <span className="check-icon">
              <BsCheckCircle />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default PaymentAdviceContainerComponent

const Wrapper = styled.div`
  .line {
    border: 1px solid var(--grey-100);
  }

  .left-wrapper,
  .right-wrapper {
    padding: 1rem;
    display: grid;
    grid-template-rows: repeat(autofit, 1fr);
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
`
