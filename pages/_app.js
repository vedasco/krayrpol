import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../public/assets/scss/app.scss";
import TapTop from "../components/widgets/Tap-Top";
import AOS from "aos";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={"/assets/images/favicon/1.png"}
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <title>Krayr | Academy, Study Abroad, Recruitment</title>
      </Helmet>
      <div>
        <Component {...pageProps} />
        <TapTop />
      </div>
    </>
  );
};

export default MyApp;
