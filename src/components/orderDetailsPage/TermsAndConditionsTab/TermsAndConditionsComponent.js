import styled from 'styled-components'
import { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'

const termsAndConditionsData = [
  {
    id: 1,
    title: 'packing and Forwarding',
    description:
      "The construction company shall be responsible for the proper packaging and forwarding of all materials and equipment required for the project, ensuring safe transportation and delivery to the designated site. Any damage or loss during packing and forwarding shall be the company's liability.",
    selected: false,
  },
  {
    id: 2,
    title: 'Credit costs',
    description: `The credit card company will securely package and forward credit cards to the cardholders' registered address. The company holds no responsibility for any loss or damage during the packing and forwarding process, and any such incidents shall be addressed by the shipping provider or courier service.`,
    selected: false,
  },
  {
    id: 3,
    title: 'Defects during transit',
    description: `The construction company shall be responsible for inspecting all materials and equipment upon delivery and notifying the supplier within [specified timeframe] of any defects or damages incurred during transit. The supplier will bear the cost of replacing or repairing the defective items.`,
    selected: false,
  },
  {
    id: 4,
    title: 'Loading',
    description: `The construction company shall be responsible for ensuring the proper and safe loading of materials and equipment onto transport vehicles. The company shall take necessary precautions to prevent any damage or loss during the loading process and shall be liable for any incidents arising from improper loading practices.`,
    selected: false,
  },
  {
    id: 5,
    title: 'Unloading',
    description: `The construction company shall be responsible for the safe and efficient unloading of materials and equipment upon arrival at the designated site. The company shall exercise caution during the unloading process to prevent any damage or accidents. Any damages incurred during unloading shall be the responsibility of the construction company.`,
    selected: false,
  },
  {
    id: 6,
    title: 'Transit Insurance',
    description: `The construction company shall arrange for appropriate insurance coverage to protect materials and equipment during transit. Any loss, damage, or theft of goods during transit shall be covered by the insurance policy, and the construction company shall be responsible for filing necessary claims and providing supporting documentation.`,
    selected: false,
  },
  {
    id: 7,
    title: 'Delivery Date',
    description: `The construction company shall make reasonable efforts to meet the agreed-upon delivery date for materials and equipment. However, unforeseen circumstances such as weather conditions or supplier delays may affect the delivery schedule. In such cases, the company will communicate any changes to the delivery date promptly and make reasonable efforts to minimize any resulting inconvenience.`,
    selected: false,
  },
]

const TermsAndConditionsComponent = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(
    termsAndConditionsData
  )

  const handleSelectTerm = (id) => {
    const updatedTermsAndConditions = termsAndConditions.map((term) => {
      if (term.id === id) {
        return { ...term, selected: !term.selected }
      }
      return term
    })
    setTermsAndConditions(updatedTermsAndConditions)
  }

  return (
    <Wrapper>
      <div className="select-terms-outer-container">
        <div className="select-terms-title">Select terms </div>
        <div className="select-terms-container">
          {termsAndConditions.map(({ id, title, description, selected }) => {
            return (
              <div key={id} className="select-term-container">
                <button
                  className={
                    selected
                      ? 'select-term-btn remove-btn-style'
                      : 'select-term-btn add-btn-style'
                  }
                  onClick={() => handleSelectTerm(id)}
                >
                  {selected ? <AiFillMinusCircle /> : <BsFillPlusCircleFill />}
                </button>
                <p>{title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="terms-selected-outer-container">
        <div className="selected-terms-title">Terms Selected</div>
        <div className="terms-selected-container">
          {termsAndConditions.map(({ id, title, description, selected }) => {
            return (
              <div
                key={id}
                className={
                  selected ? 'term-selected-container' : 'hide-term-selected'
                }
              >
                <div className="term-title">{title}</div>
                <div className="term-description">{description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default TermsAndConditionsComponent

const Wrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 15px;
  background-color: var(--white);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  height: 100%;
  overflow-y: auto;

  .select-terms-outer-container {
    border: 1px solid var(--grey-100);
    border-radius: 10px;
    padding: 1rem 2rem;
  }

  .select-terms-title {
    font-size: 2rem;
  }

  .select-terms-container {
    margin-top: 1rem;
  }

  .select-term-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .select-term-btn {
    background: transparent;
    border: none;
    display: grid;
    place-items: center;
  }

  .add-btn-style {
    color: var(--green-dark);
  }
  .remove-btn-style {
    color: var(--red-dark);
  }

  .select-term-container p {
    margin-bottom: 0;
  }

  .terms-selected-outer-container {
    border: 1px solid var(--grey-100);
    border-radius: 10px;
    padding: 1rem 2rem;
    height: 100%;
    overflow-y: auto;
  }

  .selected-terms-title {
    font-size: 2rem;
  }

  .terms-selected-container {
    margin-top: 1rem;
    height: calc(100% - 3rem);
    overflow-y: auto;
  }

  .term-selected-container {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    padding-bottom: 0.5rem;
  }

  .term-selected-container:last-child {
    border-bottom: none;
  }

  .hide-term-selected {
    display: none;
  }

  .term-title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .term-description {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.5rem;
  }
`
