import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShowProduct from './components/ShowProduct';
import AddProduct from './components/AddProduct';
import Detail from './components/Detail'
import Update from './components/Update'

let Routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <ShowProduct />
    },
    {
      path: 'add-product',
      element: <AddProduct />
    },
    {
      path:'product/:id/',
      element:<Detail/>
    },
    {
      path:'update/:id/',
      element:<Update/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>

      <RouterProvider router={Routes} />
    </div>
  </React.StrictMode>,
)

