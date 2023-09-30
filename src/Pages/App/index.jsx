import { useRoutes, BrowserRouter } from 'react-router-dom'
import {Home} from '../Home'
import {SignIn} from '../SignIn'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {MyAccount} from '../MyAccount'
import {NotFound} from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <>
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
    </>
  )
}

export {App}
