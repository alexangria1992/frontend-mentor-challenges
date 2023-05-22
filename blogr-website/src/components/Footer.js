import React, { useState } from "react";
import { footer } from "../data/footer";
import logo from "../images/logo.svg";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footer);

  return (
    <>
      <footer className="footer text-center px-5 pb-1 md:grid md:grid-cols-2 md:px-10 lg:py-10 lg:text-left lg:px-10   ">
        <div>
          <img src={logo} alt="" className="block mx-auto pt-10 md:mx-0 " />
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 footer-links  ">
          {footerLinks.map(({ id, title, links }) => (
            <ul key={id}>
              <h4 className="mt-10 text-lg py-3  ">{title}</h4>
              {links.map((link) => (
                <li key={link} className="my-1">
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
