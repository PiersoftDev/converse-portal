import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LoginPage, ErrorPage } from './pages'

import {
  SharedLayout,
  Dashboard,
  Materials,
  Quotations,
  Orders,
  ASN,
  GRN,
  User,
  Projects,
  Vendors,
} from './pages/dashboard'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const redirect = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="materials" element={<Materials />} />
          <Route path="quotations" element={<Quotations />} />
          <Route path="orders" element={<Orders />} />
          <Route path="asn" element={<ASN />} />
          <Route path="grn" element={<GRN />} />
          <Route path="user" element={<User />} />
          <Route path="rfqdetails" element={<Projects />} />
          <Route path="vendors" element={<Vendors />} />
        </Route>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
