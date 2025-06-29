import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AppLayout from "./AppLayout";
import Body from "./components/Body";
import Offers from "./components/Offers";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/offers", element: <Offers /> },
      { path: "/help", element: <Help /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
      { path: "/search", element: <Search /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);