import {
  DragAndDropComponent,
  DummyTabContent,
} from '../../components/materialsv2Page'

const materialv2Tabs = [
  {
    id: 1,
    tabName: 'Leads',
    component: <DragAndDropComponent />,
  },
  {
    id: 2,
    tabName: 'Contact',
    component: <DummyTabContent content="Contract" />,
  },
  {
    id: 3,
    tabName: 'Company',
    component: <DummyTabContent content="Company" />,
  },
  {
    id: 4,
    tabName: 'Lead Capture',
    component: <DummyTabContent content="Lead Capture" />,
  },
]

export default materialv2Tabs
