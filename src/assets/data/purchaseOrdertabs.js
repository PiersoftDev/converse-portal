import DummyPurchaseOrderTab from '../../components/materialsv2Page/purchaseOrderTab/DummyPurchaseOrderTab'
import InProgressComponent from '../../components/materialsv2Page/purchaseOrderTab/InProgressComponent'

const purchaseordertabs = [
  {
    id: 1,
    tabName: 'In Progress',
    component: <InProgressComponent />,
  },
  {
    id: 2,
    tabName: 'Shipping now',
    component: <DummyPurchaseOrderTab content="Shipping now" />,
  },
  {
    id: 3,
    tabName: 'Exceptions',
    component: <DummyPurchaseOrderTab content="Exceptions" />,
  },
  {
    id: 4,
    tabName: 'Late',
    component: <DummyPurchaseOrderTab content="Late" />,
  },
]

export default purchaseordertabs
