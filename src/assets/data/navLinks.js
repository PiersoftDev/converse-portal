import { AiOutlineHome } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { MdOutlineRequestQuote } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { BsReceiptCutoff } from 'react-icons/bs'
import { MdOutlineAssignmentInd } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'

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
    path: '/quotations',
    text: 'Quotations',
    icon: <MdOutlineRequestQuote />,
  },
  {
    id: 4,
    path: '/vendors',
    text: 'Vendors',
    icon: <BsShop />,
  },

  {
    id: 5,
    path: '/orders',
    text: 'Orders',
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: 6,
    path: '/asn',
    text: 'ASN',
    icon: <MdOutlineLocalShipping />,
  },
  {
    id: 7,
    path: '/grn',
    text: 'GRN',
    icon: <BsReceiptCutoff />,
  },
  {
    id: 8,
    path: '/user',
    text: 'UserName',
    icon: <MdOutlineAssignmentInd />,
  },
]

export default navLinks
