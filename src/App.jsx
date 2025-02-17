
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';

const router= createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/services",
    element: <ServicesPage/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);
function App() {

  return (
   <div>
    <RouterProvider router={router} />
   </div>
  );
}

export default App
