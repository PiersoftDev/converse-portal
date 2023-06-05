import SingleItem from './SingleItem'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  testing,
  getMaterialItems,
} from '../../features/MaterialIndent/MaterialSlice'
import { useEffect } from 'react'

import ReactLoading from 'react-loading'

const MaterialPageItems = () => {
  const { isLoading, isError, items } = useSelector((store) => store.material)

  console.log(isLoading, items)

  if (isLoading) {
    return (
      <LoadingWrapper>
        <ReactLoading
          type="balls"
          color="var(--grey-500)"
          height={50}
          width={50}
        />
      </LoadingWrapper>
    )
  }

  if (isError) {
    return (
      <ErrorWrapper>
        <h4>Something went wrong while fetching data ...</h4>
      </ErrorWrapper>
    )
  }
  return (
    <Wrapper>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </Wrapper>
  )
}
export default MaterialPageItems

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const Wrapper = styled.div``
