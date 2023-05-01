import { useNavigate } from 'react-router-dom'
import { FiTarget } from 'react-icons/fi'
import { MdAccessAlarms } from 'react-icons/md'
import { FaRunning } from 'react-icons/fa'
import { GiArchBridge } from 'react-icons/gi'
import styled from 'styled-components'

const QuoteCardComponent = () => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate('/projects')
  }
  return (
    <Wrapper onClick={handleCardClick}>
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
    </Wrapper>
  )
}
export default QuoteCardComponent

const Wrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  padding: 2rem 3rem;
  background-color: var(--white);
  padding-top: 5rem;
  transition: var(--transition);
  border: 1px solid transparent;

  h4 {
    color: var(--grey-800);
  }

  :hover {
    border: 1px solid var(--grey-200);
    transform: scale(1.05);
  }

  .icon {
    position: absolute;
    top: -1.5rem;
    font-size: 2rem;
    display: grid;
    place-items: center;
    background-color: var(--primary-400);
    color: var(--white);
    border-radius: 50%;
    padding: 1rem;
  }

  .sub-content {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--grey-600);
    margin-bottom: 1rem;
  }

  .sub-content p {
    margin-bottom: 0;
  }
`
