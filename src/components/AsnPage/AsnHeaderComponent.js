import { AiOutlineSearch } from 'react-icons/ai'
import { BiFilterAlt } from 'react-icons/bi'
import { IoAddCircleSharp } from 'react-icons/io5'
import styled from 'styled-components'

const AsnHeaderComponent = ({ setShowModal }) => {
  return (
    <Wrapper>
      <div className="left-wrapper">ASN</div>
      <div className="right-wrapper">
        <div className="search-container">
          <label htmlFor="search" className="search-label">
            <AiOutlineSearch />
          </label>
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search"
          />
        </div>
        <button className="filter-btn">
          <span>
            <BiFilterAlt />
          </span>
          <p>Filter</p>
        </button>
        <button className="create-btn" onClick={() => setShowModal(true)}>
          <span>
            <IoAddCircleSharp />
          </span>
          <p>Create</p>
        </button>
      </div>
    </Wrapper>
  )
}
export default AsnHeaderComponent

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 3rem 2rem;
  border-bottom: 1px solid var(--grey-100);
  box-shadow: var(--shadow-1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-wrapper {
    font-size: 2rem;
    color: var(--grey-600);
  }

  .right-wrapper {
    display: flex;
    gap: 1rem;
  }

  .search-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: 2px solid var(--grey-200);
    border-radius: 10px;
    padding: 0.25rem 0.5rem;
    color: var(--grey-700);
    transition: var(--transition);
  }

  .search-label {
    display: grid;
    place-items: center;
    font-size: 1.4rem;
    color: var(--grey-700);
  }

  .search {
    padding: 0.25rem 0;
    border: transparent;
    font-size: 1.2rem;
    color: var(--grey-700);
  }

  .search-container:hover {
    border: 2px solid var(--grey-400);
  }

  .filter-btn {
    background-color: transparent;
    border: 1px solid var(--grey-200);
    border-radius: 10px;
    padding: 0.25rem 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--grey-800);
    transition: var(--transition);
    margin-left: 0.5rem;
  }

  .filter-btn span {
    display: gird;
    place-items: center;
    font-size: 1.5rem;
    position: relative;
    top: -2px;
  }

  .filter-btn p {
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  .filter-btn:hover {
    border: 1px solid var(--grey-400);
    transform: scale(1.05);
  }

  .create-btn {
    background-color: transparent;
    border: 1px solid var(--grey-200);
    border-radius: 10px;
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
    font-size: 1.5rem;
    position: relative;
    top: -2px;
  }

  .create-btn p {
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  .create-btn:hover {
    border: 1px solid var(--grey-400);
    transform: scale(1.05);
  }
`
