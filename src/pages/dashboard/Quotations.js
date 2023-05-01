import styled from 'styled-components'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiMobile4 } from 'react-icons/ci'
import { ImMobile } from 'react-icons/im'
import { FiTarget } from 'react-icons/fi'
import { MdAccessAlarms } from 'react-icons/md'
import { FaRunning } from 'react-icons/fa'
import { GiArchBridge } from 'react-icons/gi'

const Quotations = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return (
    <Wrapper className="quotations-page">
      <h3 className="header">Quotations page nav header</h3>

      <div className="content-header">
        <div className="left-wrapper">
          <h4>Quotations</h4>
          <p>All Quotations in current month</p>
        </div>
        <span className="add-card">
          <AiOutlinePlus />
        </span>
      </div>

      <div className="filters">
        <div className="filter selected">
          <p>All</p>
          <span>50</span>
        </div>
        <div className="filter">
          <p>Started</p>
          <span>20</span>
        </div>
        <div className="filter">
          <p>Approval</p>
          <span>15</span>
        </div>
        <div className="filter">
          <p>Completed</p>
          <span>24</span>
        </div>
      </div>

      <div className="cards-container">
        <div className="quote-card">
          <span className="icon">
            <GiArchBridge />
          </span>
          <h4>Building Bridge</h4>
          <div className="sub-content">
            <span>
              <FiTarget />
            </span>
            <p>marketing team</p>
          </div>

          <div className="sub-content">
            <span>
              <MdAccessAlarms />
            </span>
            <p>1 Week left</p>
          </div>

          <div className="sub-content">
            <span>
              <FaRunning />
            </span>
            <p>Agile and fast</p>
          </div>
        </div>
        <div className="quote-card">
          <span className="icon">
            <GiArchBridge />
          </span>
          <h4>Building Bridge</h4>
          <div className="sub-content">
            <span>
              <FiTarget />
            </span>
            <p>marketing team</p>
          </div>

          <div className="sub-content">
            <span>
              <MdAccessAlarms />
            </span>
            <p>1 Week left</p>
          </div>

          <div className="sub-content">
            <span>
              <FaRunning />
            </span>
            <p>Agile and fast</p>
          </div>
        </div>
        <div className="quote-card">
          <span className="icon">
            <GiArchBridge />
          </span>
          <h4>Building Bridge</h4>
          <div className="sub-content">
            <span>
              <FiTarget />
            </span>
            <p>marketing team</p>
          </div>

          <div className="sub-content">
            <span>
              <MdAccessAlarms />
            </span>
            <p>1 Week left</p>
          </div>

          <div className="sub-content">
            <span>
              <FaRunning />
            </span>
            <p>Agile and fast</p>
          </div>
        </div>
        <div className="quote-card">
          <span className="icon">
            <GiArchBridge />
          </span>
          <h4>Building Bridge</h4>
          <div className="sub-content">
            <span>
              <FiTarget />
            </span>
            <p>marketing team</p>
          </div>

          <div className="sub-content">
            <span>
              <MdAccessAlarms />
            </span>
            <p>1 Week left</p>
          </div>

          <div className="sub-content">
            <span>
              <FaRunning />
            </span>
            <p>Agile and fast</p>
          </div>
        </div>
        <div className="quote-card">
          <span className="icon">
            <GiArchBridge />
          </span>
          <h4>Building Bridge</h4>
          <div className="sub-content">
            <span>
              <FiTarget />
            </span>
            <p>marketing team</p>
          </div>

          <div className="sub-content">
            <span>
              <MdAccessAlarms />
            </span>
            <p>1 Week left</p>
          </div>

          <div className="sub-content">
            <span>
              <FaRunning />
            </span>
            <p>Agile and fast</p>
          </div>
        </div>
        <div className="quote-card">
          <span className="icon">
            <GiArchBridge />
          </span>
          <h4>Building Bridge</h4>
          <div className="sub-content">
            <span>
              <FiTarget />
            </span>
            <p>marketing team</p>
          </div>

          <div className="sub-content">
            <span>
              <MdAccessAlarms />
            </span>
            <p>1 Week left</p>
          </div>

          <div className="sub-content">
            <span>
              <FaRunning />
            </span>
            <p>Agile and fast</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Quotations

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  padding: 2rem 3rem;
  width: 100%;
  height: 100%;
  overflow: scroll;
`
