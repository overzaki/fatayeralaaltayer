import React, { Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartModalItem from "./CartModalItem";
import { useSelector } from "react-redux";
import Link from "next/link";

const CartButton = () => {
  const cartItems = useSelector((state: any) => state.cartList);
  console.log(cartItems);
  return (
    <Popover className="relative">
      <Popover.Button as="div">
        <ShoppingCartOutlinedIcon className="cursor-pointer" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -right-1/2 z-60 mt-5 flex flex-col w-screen max-w-min px-4">
          <div className="w-64  shrink rounded-lg    bg-white  text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <div className=" overflow-y-scroll noscrollbar max-h-[50vh]">
              {cartItems?.selected?.length !== 0 ? (
                cartItems?.selected?.map((item: any) => (
                  <CartModalItem
                    quantity={item.quantity}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                  />
                ))
              ) : (
                <div className=" shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                  <p className="text-sm font-light text-center my-5">
                    Your cart is empty!
                  </p>
                </div>
              )}
            </div>
            {cartItems?.selected.length > 0 && (
              <>
                {/* Subtotal */}
                <div className="flex border-b border-gray-200 p-3  justify-between w-full">
                  <h3 className="text-lg font-semibold">Sub Total</h3>
                  <h3 className="text-lg font-semibold">
                    {cartItems?.total} KWD
                  </h3>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 p-2 w-full">
                  <Link
                    href="/checkout"
                    className="w-full flex items-center justify-center rounded-md uppercase text-white p-2 bg-[#ba470d] "
                  >
                    View cart
                  </Link>

                  <button className="w-full rounded-md uppercase text-white p-2 bg-[#888787] ">
                    empty cart
                  </button>
                </div>
              </>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default CartButton;
