import { AiFillAppstore, AiTwotoneHome } from "react-icons/ai";
import { BsCollectionPlayFill, BsFillCameraReelsFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";
import { RiFilmFill } from "react-icons/ri";
import { navItem } from "./types";

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
