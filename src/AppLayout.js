import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "./utils/loaderSlice";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    let title = "";

    if (location.pathname === "/cart") title = "Loading Cart...";
    else if (location.pathname === "/profile") title = "Loading Profile...";
    else if (location.pathname.startsWith("/restaurants"))
      title = "Loading Restaurant...";

    if (title) {
      dispatch(showLoader({ title }));
      const timer = setTimeout(() => dispatch(hideLoader()), 2000);
      return () => clearTimeout(timer);
    } else {
      dispatch(hideLoader());
    }
  }, [location]);

  return (
    <>
      <Loader />
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;