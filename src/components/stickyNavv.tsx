import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUniversity,
  FaExchangeAlt,
  FaMoneyBillAlt,
  FaRegCheckSquare,

} from "react-icons/fa";

const StickyBottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
      <div className="flex justify-around py-2 text-gray-600 text-xs">
        {/* Accounts */}
        <div className="flex flex-col items-center cursor-pointer text-blue-600">
         <Link to="/dashboard"> <FaUniversity className="text-xl" /></Link> 
          <Link to="/dashboard"><span>Accounts</span></Link> 
        </div>

        {/* Transfer | Zelle® */}
        <div className="flex flex-col items-center cursor-pointer">
          <Link to="/transfer">
            <FaExchangeAlt className="text-xl" />
          </Link>
          <Link to="/transfer">
            <span
              className={
                location.pathname === "/transfer" ? "text-blue-600" : ""
              }
            >
              Pay & Transfer
            </span>
          </Link>
        </div>

        {/* Bill Pay */}
       <Link to="/billpay">  <div className="flex flex-col items-center cursor-pointer">
         
            <FaMoneyBillAlt className="text-xl" />
         
          <span
            className={
              location.pathname === "/billpay" ? "text-blue-600" : ""
            }
          >
            Bill Pay
          </span>
        </div>
 </Link>
        {/* Deposit Checks */}
        <Link to="/history">
        <div className="flex flex-col items-center cursor-pointer">
          <FaRegCheckSquare className="text-xl" />
          <span>History</span>
        </div></Link>

        {/* Menu */}
       

      </div>
    </div>
  );
};

export default StickyBottomNav;
