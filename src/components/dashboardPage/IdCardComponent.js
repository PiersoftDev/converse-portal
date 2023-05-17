import styled from 'styled-components'

const IdCardComponent = () => {
  return (
    <Wrapper className="idcard-container">
      <div className="top-header">
        <div className="header">Welcome to Your Dashboard</div>
        <div className="underline"></div>
        <div className="id-container">
          <div className="number">1232 - 4567 - 8901</div>
          <div className="text">Member ID</div>
        </div>
      </div>
      <div className="footer">
        <div className="member-content">
          <div>Alexander Messer</div>
          <p>Member since 7/12/2019</p>
        </div>
        <button className="vier-id-card-btn">View Your MemberID Card</button>
      </div>
    </Wrapper>
  )
}
export default IdCardComponent

const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: var(--shadow-1);
  min-width: 30rem;
  display: grid;
  grid-template-rows: 1fr 5rem;

  .top-header {
    text-align: center;
    padding: 1.5rem;
    border-bottom: 1px solid var(--grey-50);
    padding-bottom: 0;
  }

  .header {
    color: var(--grey-600);
    font-weight: 500;
    font-size: 0.9;
  }

  .underline {
    border-bottom: 2px solid var(--grey-100);
    width: 3rem;
    padding-top: 0.5rem;
    margin: 0 auto;
  }

  .id-container {
    margin: 3rem 0;
  }

  .number {
    font-size: 1.6rem;
    color: var(--primary-600);
  }

  .text {
    font-size: 0.9rem;
    color: var(--grey-400);
  }

  .footer {
    padding: 1rem;
    text-align: left;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  .member-content {
    font-size: 0.8rem;
  }

  .member-content div {
    color: var(--grey-600);
  }

  .member-content p {
    margin-bottom: 0;
  }

  .vier-id-card-btn {
    background: transparent;
    border: 1px solid var(--grey-50);
    padding: 0.4rem;
    font-size: 0.7rem;
    color: var(--primary-400);
    border-radius: 5px;
    transition: var(--transition);
  }

  .vier-id-card-btn:hover {
    background-color: #f6f7f8;
    transform: scale(1.04);
  }
`
