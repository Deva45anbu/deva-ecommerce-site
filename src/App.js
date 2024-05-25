import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
// import { RouteData } from './Route';
import { RootLayout } from './Layouts/RootLayout';
import { Home } from "./Modules/Home/Home"
import { Products } from "./Modules/Products/Products"
import { AccountInfo } from "./Modules/AccountInfo/AccountInfo"
import { Wishlist } from "./Modules/WishList/WishList"
import { Carts } from "./Modules/Carts/Carts"
// import PageNotFound from './Modules/Utils/Utils';

const RouterData = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="products" element={<Products />} />
      <Route path="accountinfo" element={<AccountInfo />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="carts" element={<Carts />} />
      {/* <Route path="*" to element={<PageNotFound />} /> */}


    </Route>
  )
)





function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <RouteData></RouteData>
    //   </BrowserRouter>
    // </div>
    <>
      <RouterProvider router={RouterData} >
      </RouterProvider>
    </>

  );
}

export default App;
