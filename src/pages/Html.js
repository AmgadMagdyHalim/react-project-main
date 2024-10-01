import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>HTML Page</title>
          <meta name="description" content="Description for Home Page" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <MainContent pageName="HTML" />
      <Footer />
    </>
  );
};

export default Html;
