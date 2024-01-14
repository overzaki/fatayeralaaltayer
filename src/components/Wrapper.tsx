import React, { useEffect } from "react";
import useStyleConfig from '../utils/styleConfig';
import socket from '../utils/socket';
import { useRouter } from 'next/router';


const Wrapper = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter();
  const { styles, updateStyles } = useStyleConfig();

  const builderId = router.query.builder_id || "";

  console.log("builderId", builderId);

  useEffect(() => {
    if (builderId) {
      socket.on(`${builderId}:cmd`, (data) => {
        console.log(data.result.foneStyle);
        updateStyles({
          fontStyle: data.result.foneStyle?.en
        });
      });
    } else {
      getStyleConfig();
    }
  }, [builderId, updateStyles]);

  const getStyleConfig = () => {
    console.log("getStyleConfig Function Called");

  }


  return (
    <div className="xl:max-w-[1330px] lg:max-w-[1080px]  mx-auto ">
      {children}
    </div>
  );
};

export default Wrapper;
