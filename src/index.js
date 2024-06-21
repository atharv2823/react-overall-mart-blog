
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import MartCards from './components/Martcards/MartCards';
import Detailviews from './views/OverallMartview/Detailviews';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/martcards/:id",
    element: <Detailviews/>,
  }
])
root.render(<RouterProvider router={router}/>);



