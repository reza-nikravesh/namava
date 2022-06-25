import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== "undefined")
        window.scrollY > lastScrollY ? setShow(false) : setShow(true);
      setLastScrollY(window.scrollY);
    };
    if (typeof window !== "undefined")
      window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`header ${!show && "header-hide"} ${
        lastScrollY === 0 && "header-start"
      }`}
    >
      <Navbar />
    </div>
  );
};

export default Header;
