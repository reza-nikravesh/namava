import Image from "next/image";
import React, { useState } from "react";
import classes from "../scss/modules/Sidebar.module.scss";
import { navItems } from "../constants/links";
import Link from "next/link";
import uniqid from "uniqid";
import { FiMenu } from "react-icons/fi";
import Namava from "../public/namava.svg";
const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`${classes.container} ${open && classes.open}`}
    >
      <div className={classes.header}>
        <FiMenu className={`ic-md ${classes.toggle}`} />
        <Image src={Namava} alt="logo" />
      </div>
      <div className={classes.main}>
        <ul>
          {navItems.map((item) => (
            <li key={uniqid()} className="navItem">
              <Link href="/">
                <a>
                  <span className="ic-md">
                    <item.icon className="ic-md" />
                  </span>
                  <span>{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default Sidebar;
