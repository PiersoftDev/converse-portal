import { AiOutlineHome } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { MdOutlineRequestQuote } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { BsReceiptCutoff } from 'react-icons/bs'
import { MdOutlineAssignmentInd } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'
import { BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs'

const navLinks = [
  {
    id: 1,
    path: '/',
    text: 'Dashboard',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    path: '/materialsv2',
    text: 'Material Indent',
    icon: <BiCategoryAlt />,
  },
  {
    id: 3,
    path: '/vendorsv2',
    text: 'Vendors',
    icon: <BsShop />,
  },

  {
    id: 4,
    path: '/orders',
    text: 'Orders',
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: 5,
    path: '/asn',
    text: 'ASN',
    icon: <MdOutlineLocalShipping />,
  },
  {
    id: 6,
    path: '/grn',
    text: 'GRN',
    icon: <BsReceiptCutoff />,
  },
  {
    id: 7,
    path: '/user',
    text: 'UserName',
    icon: <MdOutlineAssignmentInd />,
  },
  {
    id: 8,
    path: '/paymentAdviceSlip',
    text: 'PaymentAdviceSlip',
    icon: <BsFillFileEarmarkSpreadsheetFill />,
  },
]

export default navLinks
