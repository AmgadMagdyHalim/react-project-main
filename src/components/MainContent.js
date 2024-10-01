import React from "react";
import "./MainContent.css";
const MainContent = ({ pageName }) => {
  return (
    <div className="myMain">
      <main>{pageName} Page</main>
    </div>
  );
};

export default MainContent;
