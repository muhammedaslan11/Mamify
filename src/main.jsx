// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Manitpage from './pages/manit-page/Manitpage.jsx';
import Pbtest from './pages/pb-test-page/Pbtest.jsx';

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
    path: "/pb",
    element: <Pbtest />,
  },
  {
    path: `/:id`,
    element: <Manitpage />,
  },
 
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);