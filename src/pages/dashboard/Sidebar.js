import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import links from '../../assets/data/navLinks'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Wrapper>
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="subheader">Converse</div>
      </NavLink>

      <div className="pages">
        {links.map(({ id, path, text, icon }) => {
          return (
            <NavLink
              key={id}
              className={({ isActive }) => (isActive ? 'page active ' : 'page')}
              to={path}
            >
              <span>{icon}</span>
              <div>{text}</div>
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default Sidebar

const Wrapper = styled.div`
  padding: 3rem;
  color: var(--white);
  background-color: var(--primary-900);

  .logo {
    width: 75px;
  }

  .subheader {
    color: var(--primary-100);
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: -0.3rem;
    margin-left: 0.2rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }

  .pages {
    margin-top: 2rem;
  }

  .page {
    color: var(--grey-300);
    display: flex;
    gap: 0.7rem;
    align-items: center;
    margin: 2.5rem 0;
    font-size: 0.8rem;
    transition: var(--transition);
  }

  .page:hover {
    color: var(--white);
  }

  .active {
    color: var(--white);
  }

  .page span {
    font-size: 1.4rem;
  }
`
