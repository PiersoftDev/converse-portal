import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import links from '../../assets/data/navLinks'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImCross } from 'react-icons/im'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = (e) => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div layout="position" style={{ width: isOpen ? '17rem' : '5rem' }}>
      <Wrapper>
        <NavLink to="/" className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          {/* <div className="subheader">Converse</div> */}
        </NavLink>
        <div className="pages">
          {links.map(({ id, path, text, icon }) => {
            return (
              <NavLink
                key={id}
                className={({ isActive }) =>
                  isActive ? 'page active ' : 'page'
                }
                to={path}
              >
                <span>{icon}</span>
                <div>{text}</div>
              </NavLink>
            )
          })}
        </div>
        <span className="icon-btn" onClick={toggleSidebar}>
          {isOpen ? <ImCross /> : <GiHamburgerMenu />}
        </span>
      </Wrapper>
    </motion.div>
  )
}
export default Sidebar

const Wrapper = styled.div`
  height: 100vh;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;

  .logo {
    width: 4rem;
    padding-left: 0.5rem;
    margin-top: 0.5rem;
  }

  .pages {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 2rem;
    padding: 0 0.5rem;
  }

  .page {
    color: var(--grey-200);
    font-size: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
    display: flex;
    align-items: center;
  }

  .page span {
    display: grid;
    place-items: center;
    padding: 0.5rem;
  }

  .page div {
    font-size: 1.3rem;
    margin-left: 1rem;
  }

  .page:hover {
    color: var(--grey-50);
    background: rgba(37, 99, 235, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(37, 99, 235, 0.3);
    border-radius: 5px;
  }

  .page.active {
    color: var(--grey-50);
    background: rgba(37, 99, 235, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(37, 99, 235, 0.3);
    border-radius: 5px;
  }

  .icon-btn {
    position: absolute;
    bottom: 2rem;
    left: 2.5rem;
    transform: translateX(-50%);
    font-size: 1.5rem;
    color: var(--grey-200);
    display: grid;
    place-items: center;
    padding: 0.5rem;
    border: 1px solid var(--grey-500);
    border-radius: 5px;
  }

  .icon-btn:hover {
    color: var(--grey-50);
    background: rgba(37, 99, 235, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(37, 99, 235, 0.3);
    border-radius: 5px;
    border: 1px solid var(--grey-200);
  }
`
