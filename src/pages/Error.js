import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainContent from "../components/MainContent";

const Error = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Error Page</title>
          <meta name="description" content="Description for Home Page" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <MainContent pageName="Sorry not found this " />
      <Footer />
    </>
  );
};

export default Error;
