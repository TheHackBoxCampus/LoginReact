import ReactDOM from 'react-dom/client'
import Form from './components/form'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./assets/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form/>
  },
  {
    path: "/success",
    element: <h1>logueado</h1>
  } 
])

ReactDOM.createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router}/>
)
