import React, { useEffect, useState } from "react";
import Nav from "./components/NavBar/Nav";
import "./css/fonts.css";
import "./css/index.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footers/Footer";
import { ContextProvider } from "./context/ContexAPI";
import Loading from "./components/LoadingSpinners/Loading";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ContextProvider>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Nav />
            <Outlet />
            <Footer />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default Layout;
