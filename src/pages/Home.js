import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Description for Home Page" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <MainContent pageName="Home " />
      <Footer />
    </>
  );
};

export default Home;
