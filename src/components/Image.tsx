import React from "react";

const Image = ({ style, src }: { style: any; src: string }) => {
  return <img style={style} src={src} />;
};

export default Image;
