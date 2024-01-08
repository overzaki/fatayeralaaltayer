import React, { useState } from "react";
import PickupModal from "../PickupModal";

const PickupButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-white p-3 font-semibold hover:bg-[#f98c56] bg-[#BA470D] "
      >
        PICKUP
      </button>
      <PickupModal open={open} setOpen={setOpen} />
    </>
  );
};

export default PickupButton;
