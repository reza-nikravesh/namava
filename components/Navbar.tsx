import Image from "next/image";
import { AiOutlineLogin } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import Namava from "../public/namava.svg";
import Link from "next/link";
import { navItems } from "../constants/navItems";
import uniqid from "uniqid";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <FiMenu className="ic-md nav-toggle" />
        <Image src={Namava} alt="logo" />
        <ul>
          {navItems.map((item) => (
            <Link key={uniqid()} href="/">
              <a>
                <li className="navItem">{item.name}</li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Link href="/q">
          <RiSearchLine className="ic-md navItem" />
        </Link>
        <Link href="/s" passHref>
          <a className="navItem">خرید اشتراک</a>
        </Link>
        <Link href="/s111" passHref>
          <>
            <AiOutlineLogin className="ic-md nav-btn-login-sm navItem" />
            <span className=" nav-btn-login-md navItem">ورود / ثبت نام</span>
            <button className="button-outlined nav-btn-login-lg navItem">
              ورود / ثبت نام
            </button>
          </>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
