import {
  DragAndDropComponent,
  DummyTabContent,
} from '../../components/materialsv2Page/indentsTab'

import PurchaseTabComponent from '../../components/materialsv2Page/purchaseOrderTab/PurchaseTabComponent'

import InProgressComponent from '../../components/materialsv2Page/purchaseOrderTab/InProgressComponent'
import RfqComponent from '../../components/materialsv2Page/RfqTab/RfqComponent'

const materialv2Tabs = [
  {
    id: 1,
    tabName: 'Indents',
    component: <DragAndDropComponent />,
  },
  {
    id: 2,
    tabName: 'Purchase Request',
    component: <DummyTabContent content="Purchase Request" />,
  },
  {
    id: 3,
    tabName: 'RFQ',
    component: <RfqComponent />,
  },
  {
    id: 4,
    tabName: 'Purchase Order',
    component: <InProgressComponent />,
  },
]

export default materialv2Tabs
