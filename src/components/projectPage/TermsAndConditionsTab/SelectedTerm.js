import { useState } from 'react'
import styled from 'styled-components'

const SelectedTerm = ({ id, selected, title }) => {
  const [textInput, setTextInput] = useState('')

  return (
    <Wrapper key={id} selected={selected}>
      <div className="term-title">{title}</div>
      <textarea
        name=""
        id=""
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Enter description here..."
        className="selected-term-textarea"
        maxLength={200}
      ></textarea>
      <span className="text-limit">{`${textInput.length}/200`}</span>
    </Wrapper>
  )
}
export default SelectedTerm

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--grey-100);
  padding-bottom: 0.5rem;
  display: ${(props) => (props.selected ? 'block' : 'none')};
  position: relative;

  .term-title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .selected-term-textarea {
    margin-top: 0.5rem;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    border: 1px solid var(--grey-200);
    display: block;
    height: 5rem;
    width: 100%;
  }
`
