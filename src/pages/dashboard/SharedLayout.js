import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import {
  getMaterialItems,
  getRfqList,
} from '../../features/MaterialIndent/MaterialSlice'
import { getVendors } from '../../features/vendors/VendorSlice'
import { useEffect } from 'react'

const SharedLayout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMaterialItems())
    // dispatch(getRfqList())
    // dispatch(getVendors())
  }, [])

  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  )
}
export default SharedLayout

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: var(--primary-900);
`
