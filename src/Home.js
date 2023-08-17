import React from "react";
import Navbar from "./navbar/Navbar";
import TopDiv from "./top_div/TopDiv";
import Articles from "./articles/Articles";
import Footer from "./footer/Footer";
const Home = () => {
  return (
    <div>
      <>
        <Navbar />
        <TopDiv />
        <Articles />
        <Footer />
      </>
    </div>
  );
};

export default Home;
