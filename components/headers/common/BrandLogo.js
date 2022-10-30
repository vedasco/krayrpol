import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const BrandLogo = ({ logo }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        <a>
          <Image
            src={`/assets/images/icon/${logo ? logo : "logo.png"}`}
            alt="Logo"
            width="70px"
            height="80px"
          />
        </a>
      </Link>
    </Fragment>
  );
};

export default BrandLogo;
