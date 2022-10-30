import React from "react";
import Image from "next/image";
import { Col } from "reactstrap";
import Link from "next/link";
import iconFrame from "../../public/assets/images/services/icons-frame.svg";

const ServiceContent = ({ link, title, icon, desc }) => {
  return (
    <>
      <div className="service_card">
        <Image
          src={iconFrame}
          width={200}
          height={200}
          alt={title}
          className="icon-frame"
        />
        <div className="icons-img">
          <Image alt="alt" src={icon} width="80%" height="80%" />
        </div>
      </div>
      <Link href={link}>
        <h5 className="service-link">{title}</h5>
      </Link>
      <p>{desc}</p>
    </>
  );
};

export default ServiceContent;
