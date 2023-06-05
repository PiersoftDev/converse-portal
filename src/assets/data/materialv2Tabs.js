import {
  DragAndDropComponent,
  DummyTabContent,
} from '../../components/materialsv2Page'

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
    component: <DummyTabContent content="Purchase Order" />,
  },
]

export default materialv2Tabs
