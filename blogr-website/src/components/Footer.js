import React, { useState } from "react";
import { footer } from "../data/footer";
import logo from "../images/logo.svg";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footer);

  return (
    <>
      <footer className="footer text-center pb-2  ">
        <div>
          <img src={logo} alt="" className="block mx-auto pt-10  " />
        </div>

        <div>
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
