import { Table } from 'antd'
import styled from 'styled-components'

const columns = [
  {
    title: ' ',
    dataIndex: 'businessPartner',
    key: '0',
    align: 'left',
    width: 400,
    fixed: 'left',
  },
  {
    title: 'Item 1',
    dataIndex: 'item1',
    key: '1',
    align: 'center',
  },
  {
    title: 'Item 2',
    dataIndex: 'item2',
    key: '2',
    align: 'center',
  },
  {
    title: 'Item 3',
    dataIndex: 'item3',
    key: '3',
    align: 'center',
  },
  {
    title: 'Item 4',
    dataIndex: 'item4',
    key: '4',
    align: 'center',
  },
  {
    title: 'Item 5',
    dataIndex: 'item5',
    key: '5',
    align: 'center',
  },
  {
    title: 'Item 6',
    dataIndex: 'item6',
    key: '6',
    align: 'center',
  },
  {
    title: 'Item 7',
    dataIndex: 'item7',
    key: '7',
    align: 'center',
  },
  {
    title: 'Item 8',
    dataIndex: 'item8',
    key: '8',
    align: 'center',
  },
  {
    title: 'Item 9',
    dataIndex: 'item9',
    key: '9',
    align: 'center',
  },
]

const data = [
  {
    key: '1',
    businessPartner: 'businessPartner 1',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '2',
    businessPartner: 'businessPartner 2',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '3',
    businessPartner: 'businessPartner 3',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '4',
    businessPartner: 'businessPartner 4',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '5',
    businessPartner: 'businessPartner 5',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '6',
    businessPartner: 'businessPartner 6',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '7',
    businessPartner: 'businessPartner 7',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '8',
    businessPartner: 'businessPartner 8',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '9',
    businessPartner: 'businessPartner 9',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
  {
    key: '10',
    businessPartner: 'businessPartner 10',
    item1: '95%',
    item2: '95%',
    item3: '95%',
    item4: '95%',
    item5: '95%',
    item6: '95%',
    item7: '95%',
    item8: '95%',
    item9: '95%',
  },
]

const PriceComparisonComponent = () => {
  return (
    <Wrapper>
      {/* <h4>Price Comparison</h4> */}
      <div className="comparison-container">
        <Table
          // style={{ width: '500px' }}
          columns={columns}
          dataSource={data}
          pagination={false}
          className="price-comparison-table"
          scroll={{ x: true }}
        />
      </div>
    </Wrapper>
  )
}
export default PriceComparisonComponent

const Wrapper = styled.div`
  margin: 1rem;
  border-radius: 1rem;
  background-color: var(--white);
  margin-bottom: 1rem;
  overflow-y: scroll;

  h4 {
    text-align: center;
    margin-top: 2rem;
  }

  .comparison-container {
    max-width: 1400px;
    margin: 3rem auto;
    overflow-y: scroll;
  }

  .price-comparison-table {
    max-width: inherit !important;

    overflow: scroll;
  }

  .price-comparison-table .ant-table-thead > tr > th {
    background-color: var(--white) !important;
    min-width: 200px !important;
  }

  .table-row-dark {
    background-color: var(--grey-50);
  }
`
