import { AiFillAppstore, AiTwotoneHome } from "react-icons/ai";
import { BsCollectionPlayFill, BsFillCameraReelsFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";
import { RiFilmFill } from "react-icons/ri";
import { FooterLink, navItem } from "./types";

export const navItems: navItem[] = [
  {
    name: "خانه",
    icon: AiTwotoneHome,
    path: "",
  },
  {
    name: "فیلم ها",
    icon: BsFillCameraReelsFill,
    path: "",
  },
  {
    name: "سریال ها",
    icon: BsCollectionPlayFill,
    path: "",
  },
  {
    name: "دسته بندی",
    icon: AiFillAppstore,
    path: "",
  },
  {
    name: "تازه ها",
    icon: GiPopcorn,
    path: "",
  },
  {
    name: "کودکان",
    icon: FaChild,
    path: "",
  },
  {
    name: "نماوا مگ",
    icon: RiFilmFill,
    path: "",
  },
];
export const footerLinks: FooterLink[] = [
  {
    name: "درباره نماوا",
    path: "",
  },
  {
    name: "تماس با ما",
    path: "",
  },
  {
    name: "نماوا مگ",
    path: "",
  },
  {
    name: "دباره ما",
    path: "",
  },
  {
    name: "کارت هدیه",
    path: "",
  },
  {
    name: "قوانین و مقررات",
    path: "",
  },
  {
    name: "سوالات متداول",
    path: "",
  },
  {
    name: "خرید اشتراک",
    path: "",
  },
  {
    name: "اپلیکیشن ها",
    path: "",
  },
  {
    name: "شرایط مصرف اینترنت",
    path: "",
  },
];