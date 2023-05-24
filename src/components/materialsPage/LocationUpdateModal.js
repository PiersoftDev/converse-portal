import styled from 'styled-components'
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

const LocationUpdateModal = ({ showLocationModal, setShowLocationModal }) => {
  return (
    <Wrapper>
      <div
        className={`location-update-modal ${showLocationModal ? 'show' : ''} `}
        onClick={() => setShowLocationModal(false)}
      >
        <div
          className="location-update-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="location-modal-header">
            <div className="location-header">
              <div className="source">MI0000001</div>
            </div>
            <div className="location-subheader">
              <p>
                Project: <span>ESI</span>
              </p>
              <p>
                Category: <span>Plumbing</span>
              </p>
              <p>
                Created Date: <span>2023/01/01</span>
              </p>
            </div>
          </div>
          <div className="location-modal-content">
            <div className="content-header">
              <div className="depart-tag">
                <p>Depart</p>
                <span>
                  <HiOutlineArrowSmRight />
                </span>
              </div>
              <div className="depart-date">Thu , Jul 8</div>
              <div className="journey">Hyderabad-Mumbai</div>
              <div className="hours">
                <span>
                  <AiOutlineClockCircle />
                </span>
                <p>10h</p>
              </div>
            </div>

            <div
              className="content-body"
              onScroll={() => console.log('scroll event happend')}
            >
              <div className="location">
                <span className="time">01-01-2023 01:30</span>
                <span className="dot"></span>
                <p>Created</p>
              </div>
              <div className="travel-information-wrapper">
                <span className="travel-duration"> 3h 25m</span>
                <span className="travel-info-line travel-start-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 16:35</span>
                <span className="dot"></span>
                <p>FRA Frankfurt Airport T1 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>

              <div className="travel-information-wrapper">
                <span className="travel-duration"> 5h 35m</span>
                <span className="travel-info-line"></span>
                <div className="travel-info">
                  <span className="travel-info-dot"></span>
                  <div className="travel-info-content">
                    <div className="travel-info-content-header">
                      Lufthansa LH1445
                    </div>
                    <div className="travel-info-content-subheader">
                      <p className="vehicle-name">Airbus A320-212</p>
                      <p className="vehicle-class">Economy</p>
                    </div>
                  </div>
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="time"> 22:10</span>
                <span className="dot"></span>
                <p>LHR London Heathrow Airport T2 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default LocationUpdateModal

const Wrapper = styled.div`
  position: absolute;
  .location-update-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 30;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .location-update-modal.show {
    opacity: 1;
    pointer-events: auto;
  }

  .location-update-modal-content {
    background-color: var(--white);
    padding: 1rem 2rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 40%;
    position: relative;
    min-height: 50%;
  }

  .location-modal-header {
    border-bottom: 1px solid var(--grey-100);
    margin-bottom: 1rem;
  }

  .location-header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .source,
  .destination {
    font-size: 1.5rem;
  }

  .location-subheader {
    display: flex;
    gap: 1rem;
    color: var(--grey-400);
  }

  .location-subheader span {
    color: var(--grey-800);
  }

  .content-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .depart-tag {
    display: flex;
    gap: 0.2rem;
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    padding: 0.2rem 0.3rem;
    font-size: 0.8rem;
    align-items: center;
    background-color: var(--green-light);
    color: var(--green-dark);
  }

  .depart-tag p {
    margin-bottom: 0;
  }

  .depart-date {
    padding: 0 1rem;
    border-right: 1px solid var(--grey-50);
  }

  .journey {
    padding: 0 1rem;
    border-right: 1px solid var(--grey-50);
  }

  .hours {
    display: flex;
    gap: 0.2rem;
    padding: 0 1rem;
    align-items: flex-end;
  }

  .hours p {
    margin-bottom: 0;
  }

  .content-body {
    max-height: 500px;
    overflow: scroll;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .time {
    width: 5rem;
    text-align: right;
    font-size: 0.9rem;
  }

  .dot {
    border: 2px solid var(--grey-200);
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: var(--grey-200);
  }

  .location p {
    margin-bottom: 0;
  }

  .travel-information-wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 5rem;
  }

  .travel-duration {
    color: var(--grey-200);
    width: 5rem;
    font-size: 0.9rem;
    text-align: right;
  }

  .travel-info-line {
    height: 6rem;
    margin: 0 calc((0.9rem - 2px) / 2);
    /* transform: translateX(-50%); */
    width: 2px;
    background-color: var(--grey-200);
  }

  .travel-start-line {
    height: 7rem !important;
  }

  .travel-info {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    gap: 0.75rem;
    border: 1px solid var(--grey-100);
  }

  .travel-info-dot {
    width: 1.1rem;
    height: 1.1rem;
    background-color: var(--primary-300);
    border-radius: 50%;
  }

  .travel-info-content {
    font-size: 0.8rem;
  }

  .travel-info-content-subheader {
    color: var(--grey-300);
    display: flex;
    align-items: center;
  }

  .travel-info-content-subheader p {
    margin-bottom: 0;
  }

  .vehicle-name {
    padding-right: 0.5rem;
    border-right: 1px solid var(--grey-50);
  }

  .vehicle-class {
    padding-left: 0.5rem;
  }

  .arrow {
    font-size: 0.8rem;
    color: var(--grey-700);
    font-weight: 500;
  }
`
