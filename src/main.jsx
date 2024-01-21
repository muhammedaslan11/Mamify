import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Manitpage from './pages/manit-page/Manitpage.jsx';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/icardi-wanda",
    element: <Manitpage />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);