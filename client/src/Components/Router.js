import Header from './Header'
import KeyPad from './KeyPad'
import Sales from '../Pages/Sales'
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
            <Route path = "/sales" element={<Sales/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}