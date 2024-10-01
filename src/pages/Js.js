import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Js = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>JS Page</title>
          <meta name="description" content="Description for Home Page" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <MainContent pageName="JS" />
      <Footer />
    </>
  );
};

export default Js;
