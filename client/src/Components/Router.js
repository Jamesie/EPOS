import Header from './Header'
import KeyPad from './KeyPad'
import Sales from '../Pages/Sales'
import PayType from '../Pages/PayType'
import CashPage from '../Pages/cash'
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'

export default function Router() {

  const Layout = () => {
      return (
        <>
          <Header/>
          <Outlet/>
        </>
      )
    }
  return(
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<KeyPad/>}/>
          <Route path='/' element={<Layout/>}>
            <Route path = '/cash' element={<CashPage/>}/>
            <Route path = '/PayType' element={<PayType/>}/>
            <Route path = "/sales" element={<Sales/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}