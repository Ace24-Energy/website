import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainabout from './Pages/AboutUsPage/Mainabout.jsx';
import Ourteam from './Pages/OurTeamPage/Ourteam.jsx';
import Services from './Pages/ServicesPage/Services.jsx';
import Playstore from './Pages/PlaystorePage/Playstore.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "AboutUs",
    element: <Mainabout/>
  },

  {
    path: "OurTeam",
    element: <Ourteam/>
  },

  {
    path: "Services",
    element: <Services/>
  },

  {
   path: "Playstore",
    element: <Playstore/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
