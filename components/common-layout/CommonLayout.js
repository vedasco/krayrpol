import React from "react";
import Header from "../headers/Header";
import Helmet from "react-helmet";
import favicon from "../../public/assets/images/favicon/1.png";
import MasterFooter from "../footers/common/MasterFooter";

const CommonLayout = ({ children, title, parent, subTitle }) => {
  return (
    <>
      <Header />
      <>{children}</>
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"green-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space green-layout"}
        newsLetter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default CommonLayout;
