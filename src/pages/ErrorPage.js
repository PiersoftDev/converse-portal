import notFound from '../assets/images/notFound.svg'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <img src={notFound} alt="not-found" className="img" />
        <h3>Ohh! Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">Back Home</a>
      </div>
    </Wrapper>
  )
}
export default ErrorPage

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);

  .error-container {
    width: 90vw;
    max-width: 550px;
    text-align: center;
  }

  .error-container h3 {
    margin-top: 3rem;
  }

  .error-container p {
    color: var(--grey-500);
    font-size: 1.2rem;
  }

  .error-container a {
    text-decoration: underline;
    font-size: 1.2rem;
    color: var(--primary-500);
    transition: var(--transition);
  }

  .error-container a:hover {
    color: var(--primary-800);
  }
`
