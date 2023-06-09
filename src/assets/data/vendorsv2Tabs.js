import DummyTabComponent from '../../components/Vendorsv2Page/DummyTabComponent'

import DirectoryComponent from '../../components/Vendorsv2Page/DirectoryComponent'

import InProgressComponent from '../../components/Vendorsv2Page/purchaseOrderTab/InProgressComponent'
import AsnTabComponent from '../../components/Vendorsv2Page/asnTab/AsnTabComponent'

const vendorsv2Tabs = [
  {
    id: 1,
    tabName: 'Directory',
    component: <DirectoryComponent />,
  },
  {
    id: 2,
    tabName: 'Bids',
    component: <DummyTabComponent content={'Bids'} />,
  },
  {
    id: 3,
    tabName: 'Purchase Orders',
    component: <InProgressComponent />,
  },
  {
    id: 4,
    tabName: 'ASN',
    component: <AsnTabComponent />,
  },
]

export default vendorsv2Tabs
