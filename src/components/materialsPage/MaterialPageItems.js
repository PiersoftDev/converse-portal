import SingleItem from './SingleItem'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  testing,
  getMaterialItems,
} from '../../features/MaterialIndent/MaterialSlice'
import { useEffect } from 'react'

const MaterialPageItems = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, items } = useSelector((store) => store.material)

  useEffect(() => {
    dispatch(getMaterialItems())
  }, [])

  console.log(isLoading, items)

  if (isLoading) {
    return (
      <LoadingWrapper>
        <h4>Still Loading ...</h4>
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
