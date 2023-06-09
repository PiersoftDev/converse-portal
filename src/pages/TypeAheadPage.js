import { useState } from 'react'
import styled from 'styled-components'

const TypeAheadPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const fetchData = async (input) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      const data = await response.json()
      const results = data.filter((user) => {
        return input && user.name.toLowerCase().includes(input)
      })
      setSearchResults(results)
      console.log(results)
    } catch (error) {
      console.log(error)
      console.log('some error occured while fetching sample json data')
    }
  }

  const handleInputChange = async (e) => {
    setInputValue(e.target.value)
    fetchData(e.target.value)
  }

  const handleSearchItemsClick = ({ name }) => {
    setInputValue(name)
    setSearchResults([])
  }

  return (
    <Wrapper>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <ul className="drop-down-container">
          {searchResults.map((result, index) => {
            return (
              <li
                key={index}
                className="search-item"
                onClick={() => handleSearchItemsClick(result)}
              >
                {result.name}
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}
export default TypeAheadPage

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--grey-50);

  .search-container {
    margin-top: 20rem;
    width: 90vw;
    max-width: 550px;
    text-align: center;
  }

  .error-container h3 {
    margin-top: 3rem;
  }
`
