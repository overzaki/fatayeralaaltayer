import React, { useState } from "react";
import PickupModal from "../PickupModal";

const PickupButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-white p-3 font-semibold hover:opacity-70 bg-primary rounded-custom"
      >
        PICKUP
      </button>
      <PickupModal open={open} setOpen={setOpen} />
    </>
  );
};

export default PickupButton;
