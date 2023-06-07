import {
  DragAndDropComponent,
  DummyTabContent,
} from '../../components/materialsv2Page'

import PurchaseTabComponent from '../../components/materialsv2Page/purchaseTab/PurchaseTabComponent'

import InProgressComponent from '../../components/materialsv2Page/purchaseTab/InProgressComponent'

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
    component: <DummyTabContent content="RFQ" />,
  },
  {
    id: 4,
    tabName: 'Purchase Order',
    component: <InProgressComponent />,
  },
]

export default materialv2Tabs
