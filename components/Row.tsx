import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Poster from "./Poster";
import { BreakPoints } from "../constants/styles";
import uniqid from "uniqid";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css/navigation";

// we will change this later
interface Props {
  title: string;
  data: {
    name: string;
    poster: string;
  }[];
}
const Row = ({ title, data }: Props) => {
  return (
    <div className="row">
      <h2 className="subTitle">{title}</h2>
      <Swiper
        breakpoints={{
          [BreakPoints.SM]: {
            slidesPerView: 3,
          },
          [BreakPoints.MD]: {
            slidesPerView: 4,
          },
          [BreakPoints.LG]: {
            slidesPerView: 5,
          },
          [BreakPoints.XL]: {
            slidesPerView: 7,
          },
        }}
        navigation
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
      >
        {data.map((movie) => (
          <SwiperSlide key={uniqid()}>
            <Poster name={movie.name} thumbnail={movie.poster} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Row;
