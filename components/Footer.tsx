import Link from "next/link";
import { footerLinks } from "../constants/links";
import classes from "../scss/modules/Footer.module.scss";
import uniqid from "uniqid";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.links}>
        {footerLinks.map((item) => (
          <Link href={item.path} key={uniqid()}>
            <a>
              <li className="footerLink">{item.name}</li>
            </a>
          </Link>
        ))}
      </ul>
      <div className={classes.socials}>
        <AiFillTwitterCircle className="ic-md footerLink" />
        <BsTelegram className="ic-md footerLink" />
        <AiFillInstagram className="ic-md footerLink" />
      </div>
      <p className="description">
        خدمات ارایه شده در نماوا، دارای مجوز های لازم از مراجع مربوطه می باشد و
        هر گونه بهره برداری و سوء استفاده از محتوای نماوا، پیگرد قانونی دارد.
      </p>
    </div>
  );
};

export default Footer;
