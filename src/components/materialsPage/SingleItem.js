import { useState } from 'react'
import DetailsComponent from './DetailsComponent'
import ItemComponent from './ItemComponent'
import styled from 'styled-components'

const SingleItem = ({ item }) => {
  const {
    itemDesc,
    quantity,
    plannedDate,
    projectDesc,
    activityDesc,
    inventory,
    createdDate,
    procurredTillDate,
    budgetedQty,
    variance,
  } = item

  const itemComponentValues = { itemDesc, quantity, plannedDate }
  const detailsComponentValues = {
    projectDesc,
    activityDesc,
    createdDate,
    budgetedQty,
    inventory,
    procurredTillDate,
    variance,
  }

  const [showDetails, setShowDetails] = useState(false)

  return (
    <Wrapper>
      <ItemComponent
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        itemComponentValues={itemComponentValues}
      />
      {showDetails && (
        <DetailsComponent detailsComponentValues={detailsComponentValues} />
      )}
    </Wrapper>
  )
}
export default SingleItem

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 1rem;
  border-radius: 1rem;
  margin: 0.5rem 0;
  padding-bottom: 0;
`
