import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import { carousalItems } from '../../assets/data'

import { useState, useEffect } from 'react'

import styled from 'styled-components'

const CarousalComponent = () => {
  const [items, setItems] = useState(carousalItems)
  const [currentItem, setCurrentItem] = useState(0)

  const handlePrev = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem - 1 + items.length) % items.length
      return newItem
    })
  }

  const handleNext = () => {
    setCurrentItem((oldItem) => {
      const nextitem = (oldItem + 1) % items.length
      return nextitem
    })
  }

  useEffect(() => {
    const id = setInterval(() => {
      handleNext()
    }, 2500)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <Wrapper>
      <div className="carousal-container">
        {items.map(({ header, text }, index) => {
          return (
            <div
              className="carousal-item"
              style={{
                transform: `translateX(${(index - currentItem) * 100}%)`,
                opacity: index === currentItem ? 1 : 0,
                visibility: index === currentItem ? 'visible' : 'hidden',
              }}
            >
              <h4>{header}</h4>
              <p>{text}</p>
              <p>{text}</p>
            </div>
          )
        })}
      </div>

      <div className="footer-nav">
        <button className="prev-btn" onClick={handlePrev}>
          <FiChevronLeft />
        </button>

        <div className="dots-container">
          {items.map((item, index) => {
            if (index === currentItem) {
              return <div className="dot active-dot"></div>
            }

            return <div className="dot"></div>
          })}
        </div>

        <button className="next-btn" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}
export default CarousalComponent

const Wrapper = styled.div`
  margin-bottom: 1rem;

  h4 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0;
    color: var(--grey-400);
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
  }

  .carousal-container {
    position: relative;
    padding: 1rem 2rem;
    height: 10rem;
    overflow: hidden;
  }

  .carousal-item {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    transform: translateX(100%);
    transition: var(--transition);
  }

  .footer-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .prev-btn,
  .next-btn {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    color: var(--grey-300);
    transition: var(--transition);
  }

  .prev-btn:hover,
  .next-btn:hover {
    color: var(--grey-700);
  }

  .dots-container {
    display: flex;
    gap: 1rem;
  }

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--grey-300);
  }

  .active-dot {
    background-color: var(--black);
  }
`
