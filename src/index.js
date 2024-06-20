
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import martcards from './components/martcards/martcards';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/martcards/:id",
    element: <martcards/>,
  }
])
root.render(<RouterProvider router={router}/>);



