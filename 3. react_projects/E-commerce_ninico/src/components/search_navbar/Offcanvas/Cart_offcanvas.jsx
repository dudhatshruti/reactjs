import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Offcanvas/offcanvas.css";

const Cart_offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="cart-button " onClick={openMenu}>
        <a  className="">
          <i class="fa-solid fa-cart-shopping  "></i>
        </a>
        {/* <div className=" w-3.5 h-3.5 rounded-full text-xs text-white absolute md:top-2 lg:right-[77px] md:right-[100px] sm:right-[125px] sm:top-[79px] bg-[#d51243] ">1</div>  */}
        
      </button>
      <div
        className={`offcanvas-menu   bg-white  ${isOpen ? "open" : "close"}`}
      >
        <button className="close-button absolute" onClick={closeMenu}>
          <div className="flex justify-between bg-gray-100 p-2.5 px-4">
            <h5 className=" your-cart  text-[14px] text-black font-bold  mr-40">YOUR CART</h5>
            <i class="fa-solid fa-xmark text-xs text-[#d51243]  "></i>
          </div>
        </button>
        <section className="items-center">
          <div className="flex mt-72 px-4  font-semibold text-[#d51243] justify-between  ">
            <h5 className="text-xs pt-6">SUBTOTAL:</h5>
            <h5 className="text-md pt-6">$0.00</h5>
          </div>
        </section>
        <div className="px-4 mt-5">
          <div className="border-2 border-[#d51243] rounded-full text-center p-1.5 hover:bg-[#d41d4b] text-[#d51243]  hover:text-white ">
            <button className="text-sm font-semibold  ">
              <Link to="/cart" href="">View cart</Link>
            </button>
          </div>
          <div className="border-2 mt-4 bg-[#d51243] border-[#d51243] rounded-full text-center p-1.5">
            <button className="text-sm font-semibold text-white ">
              <Link to="/checkout" href="">Checkout</Link>
            </button>
          </div>
        </div>

        <div className="text-xs text-center mt-9 p-4 bg-[#8e8b74]">
          <span className="text-white">
            Free shipping for Order <b>UNDER 10KM</b>
          </span>
        </div>
      </div>
    </>
  );
};

export default Cart_offcanvas;
