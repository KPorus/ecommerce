import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main"
import About from "../Pages/About";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import NewArrivals from "../Pages/NewArrivals";
import BestSeller from "../Pages/BestSeller";
import TopRate from "../Pages/TopRate";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/newArivals",
        element: <NewArrivals />,
      },
      {
        path: "/bestSeller",
        element: <BestSeller />,
      },
      {
        path: "/topRate",
        element: <TopRate />,
      },
    ],
  },
]);