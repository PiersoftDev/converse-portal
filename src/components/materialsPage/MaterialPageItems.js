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
  const { isLoading, items } = useSelector((store) => store.material)

  useEffect(() => {
    dispatch(getMaterialItems())
  }, [])

  console.log(isLoading, items)
  return (
    <Wrapper>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </Wrapper>
  )
}
export default MaterialPageItems

const Wrapper = styled.div``
