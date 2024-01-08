import React from "react";

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="xl:max-w-[1330px] lg:max-w-[1080px]  mx-auto ">
      {children}
    </div>
  );
};

export default Wrapper;
