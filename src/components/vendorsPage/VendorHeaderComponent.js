import { AiOutlineSearch } from 'react-icons/ai'
import { BiFilterAlt } from 'react-icons/bi'
import { IoAddCircleSharp } from 'react-icons/io5'
import styled from 'styled-components'

const VendorHeaderComponent = ({ setShowModal }) => {
  return (
    <Wrapper>
      <div className="left-wrapper">Vendor Page</div>
      <div className="right-wrapper">
        <button className="create-btn" onClick={() => setShowModal(true)}>
          <span>
            <IoAddCircleSharp />
          </span>
          <p>Onboard</p>
        </button>
      </div>
    </Wrapper>
  )
}
export default VendorHeaderComponent

const Wrapper = styled.div`
  background-color: var(--white);
  border-top-left-radius: 2rem;
  padding: 3rem 2rem;
  border-bottom: 1px solid var(--grey-100);
  box-shadow: var(--shadow-1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-wrapper {
    font-size: 1.4rem;
    color: var(--grey-600);
  }

  .right-wrapper {
    display: flex;
    gap: 1rem;
  }

  .create-btn {
    background-color: transparent;
    border: 1px solid var(--grey-200);
    border-radius: 5px;
    padding: 0.25rem 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--grey-800);
    margin-left: 0.5rem;
  }

  .create-btn span {
    display: gird;
    place-items: center;
    font-size: 1rem;
    position: relative;
    top: -2px;
  }

  .create-btn p {
    margin-bottom: 0;
    font-size: 1rem;
  }

  .create-btn:hover {
    border: 1px solid var(--grey-400);
    transform: scale(1.05);
  }
`
