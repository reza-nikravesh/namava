import Image from "next/image";
import React from "react";

interface Props {
  thumbnail: string;
  name: string;
}
const Poster = ({ thumbnail, name }: Props) => {
  return (
    <div className="poster">
      <Image  width={200} height={400} src={thumbnail} alt={`${name}-poster`} />
      <span>{name}</span>
    </div>
  );
};

export default Poster;
