import "./App.css";
import Home from "./Pages/Home";
import ProductMain from "./Pages/ProductMain";
import Cart from "./Pages/Cart";
import AboutUs from "./Pages/AboutUs";
import FeatureProduct from "./Pages/FeatureProduct";
import NewProduct from "./Pages/NewProduct";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import RequireAuth from "./Pages/RequireAuth";
import AxiosGet from "./Pages/AxiosGet";
import AxiosPost from "./Pages/AxiosPost";
// import User from './Pages/User'
// import UserDetails from './Pages/UserDetails'
// import Admin from './Pages/Admin'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "shop",
        element: <ProductMain />,
        children: [
          {
            path: "featureproduct",
            element: <FeatureProduct />,
          },
          {
            path: "newproduct",
            element: <NewProduct />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element:<RequireAuth>
          <Profile />
        </RequireAuth>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:"axios",
        element:<AxiosGet/>
      },
      {
        path:"axiospost",
        element:<AxiosPost/>
      }
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={route}>{/* <Header/> */}</RouterProvider>
        {/* <BrowserRouter>
        <Header/>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/shop' element={<ProductMain/>}>
            <Route path='featureproduct' element={<FeatureProduct/>}></Route>
            <Route path='newproduct' element={<NewProduct/>}></Route>
          </Route>
          <Route path='/user' element={<User/>}>
            <Route path=":userId" element={<UserDetails/>}></Route>
            <Route path='admin' element={<Admin/>}></Route>
          </Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
