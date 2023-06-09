import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

const VendorTableComponent = ({ vendorsList }) => {
  if (vendorsList?.length < 1) {
    return (
      <NoVendorsWrapper>
        <h4>No Vendors are there </h4>
      </NoVendorsWrapper>
    )
  }

  return (
    <Wrapper>
      <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Business Name</th>
            <th>Address</th>
            <th>State</th>
            <th>GST</th>
            <th>Aadhar</th>
            <th>PAN</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {vendorsList.map(
            ({
              id,
              gst,
              aadhaar,
              pan,
              pocName,
              pocWhatsappNo,
              pocEmail,
              businessName,
              address,
              state,
            }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{businessName}</td>
                  <td>{address}</td>
                  <td>{state}</td>
                  <td>{gst}</td>
                  <td>{aadhaar}</td>
                  <td>{pan}</td>
                  <td>{pocName}</td>
                  <td>{pocWhatsappNo}</td>
                  <td>{pocEmail}</td>
                </tr>
              )
            }
          )}
        </tbody>
      </Table>
    </Wrapper>
  )
}
export default VendorTableComponent

const NoVendorsWrapper = styled.div`
  margin: 2rem;
`

const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  border: 1px solid var(--grey-100);
  margin: 2rem 0;

  th,
  td {
    color: var(--grey-700);
    padding: 0.5rem 1rem !important ;
  }

  .table-hover tbody tr:hover td,
  .table-hover tbody tr:hover th {
    background-color: #f9fcff;
  }

  .table {
    margin-bottom: 0;
  }

  td,
  th {
    text-align: center;
  }
`
