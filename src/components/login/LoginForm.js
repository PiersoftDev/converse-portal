import { FaRegEnvelope } from 'react-icons/fa'
import { MdOutlineLock } from 'react-icons/md'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import googleLogo from '../../assets/images/google-icon.svg'
import facebookLogo from '../../assets/images/facebook.svg'

import { useState } from 'react'
import { toast } from 'react-toastify'
import validator from 'validator'

const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isPasswordVisibile, setIsPasswordVisibile] = useState(false)

  const handleFocus = (e) => {
    const parentContainer = e.target.parentElement
    parentContainer.classList.add('active-input-container')
  }

  const handleOutOfFocus = (e) => {
    const parentContainer = e.target.parentElement
    parentContainer.classList.remove('active-input-container')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email && !password) {
      toast.error('Pls add Email and Password')
      return
    }

    if (!email) {
      toast.error('Pls add Email')
      return
    }

    if (!password) {
      toast.error('Pls add Password')
      return
    }

    if (!validator.isEmail(email)) {
      toast.error('This is not a valid email')
      return
    }

    localStorage.setItem('auth', true)

    navigate('/')

    setEmail('')
    setPassword('')
    toast.success('Email and Password are submitted')
  }

  return (
    <Wrapper>
      <h4 className="header">Welcomeback!</h4>
      <p className="sub-header">
        Start managing your finance faster and better{' '}
      </p>

      <form className="login-form">
        <div
          className="input-container"
          onFocus={handleFocus}
          onBlur={handleOutOfFocus}
        >
          <span>
            <FaRegEnvelope />
          </span>
          <input
            type="email"
            value={email}
            className="input"
            placeholder="Enter you email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div
          className="input-container"
          onFocus={handleFocus}
          onBlur={handleOutOfFocus}
        >
          <span>
            <MdOutlineLock />
          </span>
          <input
            type={isPasswordVisibile ? 'text' : 'password'}
            value={password}
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          {isPasswordVisibile ? (
            <span
              className="password"
              onClick={() => setIsPasswordVisibile(!isPasswordVisibile)}
            >
              <AiOutlineEyeInvisible />
            </span>
          ) : (
            <span
              className="password"
              onClick={() => setIsPasswordVisibile(!isPasswordVisibile)}
            >
              <AiOutlineEye />
            </span>
          )}
        </div>

        <p className="forgot-password">Forgot password?</p>

        <button type="submit" onClick={handleSubmit} className="btn login-btn">
          Login
        </button>
      </form>

      <div className="seperator">or</div>

      <div className="btns-container">
        <a href="#" className="google-btn">
          <img src={googleLogo} alt="google" /> Google
        </a>
        <a href="#" className="facebook-btn">
          <img src={facebookLogo} alt="facebook" />
          Facebook
        </a>
      </div>

      <p className="sign-up">
        Don't you have an account? <a href="#">Sign Up</a>
      </p>
    </Wrapper>
  )
}
export default LoginForm

const Wrapper = styled.div`
  width: 70%;
  margin: 15rem auto;
  max-width: 450px;

  .header {
    font-size: 2rem;
    margin-bottom: 0rem;
  }

  .sub-header {
    color: var(--grey-400);
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
  }

  .login-form {
    margin-top: 2rem;
  }

  .input-container {
    display: flex;
    align-items: center;
    background-color: var(--grey-50);
    border-radius: 10px;
    margin-bottom: 0.75rem;
    padding: 0.5rem 1rem;
    /* border: 1px solid var(--primary-400); */
  }

  .active-input-container {
    border: 1px solid var(--primary-500);
  }

  .input-container span {
    background-color: var(--white);
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    color: var(--primary-400);
    border-radius: 5px;
  }

  .input-container input {
    padding: 0.5rem 1rem;
    width: 100%;
    background: transparent;
    border: transparent;
    color: var(--grey-700);
    letter-spacing: var(--letterSpacing);
  }

  input::placeholder {
    letter-spacing: 0.1rem;
    color: var(--grey-300);
  }

  .forgot-password {
    color: var(--primary-400);
    text-align: right;
    margin: 0.5rem 0;
    cursor: pointer;
    transition: var(--transition);
  }

  .forgot-password:hover {
    color: var(--primary-500);
  }

  .input-container .password {
    color: var(--grey-700);
    background: transparent;
  }

  .btn {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
  }
  .btn:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }

  .login-btn {
    width: 100%;
    border-radius: 8px;
    padding: 0.8rem 0.5rem;
  }

  .seperator {
    margin: 2rem 0;

    display: flex;

    align-items: center;
    text-align: center;
    /* 
  border: 1px solid red; */
  }

  .seperator::after,
  .seperator::before {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--grey-50);
  }

  .seperator::before {
    margin-right: 0.5rem;
  }

  .seperator::after {
    margin-left: 0.5rem;
  }

  .btns-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .google-btn,
  .facebook-btn {
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid var(--grey-100);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 7px;
    cursor: pointer;
    font-weight: 550;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-600);
    transition: var(--transition);
    text-decoration: none;
  }

  .google-btn:hover,
  .facebook-btn:hover {
    background-color: var(--grey-50);
    transform: scale(1.05);
  }

  .btns-container img {
    width: 20px;
  }

  .sign-up {
    text-align: center;
    margin-top: 2rem;
    color: var(--grey-400);
    cursor: pointer;
  }

  .sign-up a {
    color: var(--primary-500);
  }
`
