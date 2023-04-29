import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import links from '../../assets/data/navLinks'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImCross } from 'react-icons/im'

const Dummy = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = (e) => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div layout="position" style={{ width: isOpen ? '17rem' : '5rem' }}>
      <Wrapper className="nav-sidebar">
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
export default Dummy

const Wrapper = styled.div``
