import styled from 'styled-components'

const AccumulatorsComponent = () => {
  return (
    <Wrapper>
      <h4>accumulators</h4>
      <div className="options-container">
        <select name="type" id="type" className="select-element">
          <option value="medical">Medical</option>
          <option value="dental">Dental</option>
          <option value="vision">Vision</option>
        </select>
        <select name="type" id="type" className="select-element">
          <option value="medical">John Doe</option>
          <option value="dental">Anna Hathway</option>
          <option value="vision">Tom Hanks</option>
        </select>
        <select name="type" id="type" className="select-element">
          <option value="medical">In-Network</option>
          <option value="dental">Out-of-Network</option>
          <option value="vision">Currrenlty not available</option>
        </select>
        <select name="type" id="type" className="select-element">
          <option value="medical">last 3 months</option>
          <option value="dental">last 2 months</option>
          <option value="vision">last 5 months</option>
        </select>
      </div>
      <div className="animation-container">
        {/* <div className="complete-container">
          <div className="complete">
            <div>$ Complete</div>
            <p></p>
          </div>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}

        <div className="progress-bar"></div>
        <div
          class="progress-bar-1"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>

        <div
          class="progress-bar-2"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <div className="content">
        <div className="deductible">
          <p>
            <span></span> Deductible
          </p>
          <div className="progress-container">
            <div className="deductible-progress">
              <div className="deductible-fill"></div>
            </div>
            <p>$4,972</p>
          </div>
        </div>

        <div className="out-of-pocket">
          <p>
            <span></span> Out-of-Pocket
          </p>
          <div className="progress-container">
            <div className="out-of-pocket-progress">
              <div className="out-of-pocket-fill"></div>
            </div>
            <p>$4,972</p>
          </div>
        </div>
        <div className="total">
          <p>Total Paid by you</p>
          <span>$4,910</span>
        </div>
      </div>
    </Wrapper>
  )
}
export default AccumulatorsComponent

const Wrapper = styled.div`
  border: 1px solid var(--grey-50);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 1rem;

  h4 {
    color: var(--grey-700);
    margin-bottom: 0;
  }

  .options-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1rem 0;
  }

  .select-element {
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    font-size: 0.9rem;
  }

  .animation-container {
    display: grid;
    place-items: center;
    position: relative;
  }

  .progress-bar {
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: rgba(240, 244, 248, 0.5) !important;
  }

  .progress-bar-1 {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(
        closest-side,
        var(--grey-50) 89%,
        transparent 90% 100%
      ),
      conic-gradient(
        var(--primary-300) calc(var(--progress-value-1) * 1%),
        var(--grey-100) 0
      );
    animation: progress 2s 1 forwards;
  }

  .progress-bar-2 {
    position: absolute;
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(
        var(--primary-400) calc(var(--progress-value-2) * 1%),
        var(--grey-100) 0
      );
    animation: progress 2s 1 forwards;
  }

  .progress-bar-2::before {
    counter-reset: percentage var(--progress-value-2);
    content: counter(percentage) '%';
    animation: progress 2s 1 forwards;
  }

  .content {
    margin-bottom: 1rem;
  }

  .deductible p {
    margin-bottom: 0;
    color: var(--grey-700);
  }

  .progress-container {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 2rem;
  }

  .deductible-progress {
    height: 0.5rem;
    background-color: var(--grey-100);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .deductible-fill {
    height: 100%;
    width: 80%;
    background-color: var(--primary-400);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .deductible span {
    display: inline-block;
    height: 5px;
    width: 5px;
    background-color: var(--primary-200);
    border-radius: 50%;
    position: relative;
    top: -2px;
  }

  .out-of-pocket {
    margin-bottom: 1rem;
  }

  .out-of-pocket p {
    margin-bottom: 0;
    color: var(--grey-700);
  }

  .progress-container {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 2rem;
  }

  .out-of-pocket-progress {
    height: 0.5rem;
    background-color: var(--grey-100);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .out-of-pocket-fill {
    height: 100%;
    width: 50%;
    background-color: rgb(12, 191, 12);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .out-of-pocket span {
    display: inline-block;
    height: 5px;
    width: 5px;
    background-color: var(--primary-200);
    border-radius: 50%;
    position: relative;
    top: -2px;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }

  .total p {
    margin-bottom: 0;
    color: var(--grey-700);
  }

  .total span {
    font-size: 1.3rem;
    color: var(--primary-400);
  }
`
