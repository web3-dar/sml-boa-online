import React, { useEffect, useState } from "react";
import { FaEnvelope, FaShoppingCart, FaSignOutAlt, FaBars } from "react-icons/fa";
import { TbZzz, TbWorld } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa6";
import StickyBottomNav from "../components/stickyNavv";
import { Link, useNavigate } from "react-router-dom";
import lol from "../assets/logo.png";

const TransferOptions: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userAmount, setUserAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.firstName || "");
      setUserAmount(user.amount || 0);
    }
  }, []);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.clear();
      sessionStorage.clear();
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  const handleLogout2 = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen z-10">
        <div className="bg-white p-6 w-80 flex flex-col items-center">
          <img src={lol} alt="Loading" className="w-40 h-32 object-contain mb-4" />
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-blue-500 border-dotted rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white min-h-screen font-sans">
      {/* Top Menu */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">
        <div onClick={handleLogout2} className="flex items-center space-x-1 hover:text-red-800 cursor-pointer">
          <FaBars />
          <span>Menu</span>
        </div>
        <div className="flex items-center space-x-6">
          <div onClick={handleLogout2} className="flex items-center space-x-1 hover:text-red-800 cursor-pointer">
            <FaEnvelope />
            <span>Inbox</span>
          </div>
          <div onClick={handleLogout2} className="flex items-center space-x-1 hover:text-red-800 cursor-pointer">
            <FaShoppingCart />
            <span>Products</span>
          </div>
          <div onClick={handleLogout} className="flex items-center space-x-1 hover:text-red-800 cursor-pointer">
            <FaSignOutAlt />
            <span>Log Out</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-100 rounded-full px-4 py-2 mt-4 text-sm flex items-center w-full">
        <input
          type="text"
          placeholder={`Hi, ${userName}. How can I help?`}
          className="bg-transparent w-full outline-none"
        />
        <div className="text-red-600 text-lg font-bold">☰</div>
      </div>

      {/* Balance */}
      <div className="mt-4 text-lg flex gap-2 items-center">
        Available balance:
        <p className="text-2xl font-bold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(userAmount)}
        </p>
      </div>

      {/* Grid Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-2 mt-6 rounded-lg shadow">
        <Link to={"/send"}>
          <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
            <p className="text-blue-600 font-medium mt-2">Transfer</p>
            <p className="text-xs text-gray-500 text-center">between my accounts</p>
          </div>
        </Link>

        <Link to={"/zelle"}>
          <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
            <TbZzz className="text-purple-600 text-2xl" />
            <p className="text-purple-600 font-medium">Zelle®</p>
            <p className="text-xs text-gray-500 text-center">send or receive</p>
          </div>
        </Link>

        <Link to={"/billpay"}>
          <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
            <FaMoneyBillWave className="text-blue-600 text-2xl" />
            <p className="text-blue-600 font-medium">Pay Bills</p>
            <p className="text-xs text-gray-500 text-center">pay now or schedule</p>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
          <TbWorld className="text-blue-600 text-2xl" />
          <p className="text-blue-600 font-medium">Wire</p>
          <p className="text-xs text-gray-500 text-center">U.S. or international</p>
        </div>
      </div>

      {/* Sticky Bottom Nav only for mobile */}
      <div className="md:hidden mt-10">
        <StickyBottomNav />
      </div>
    </div>
  );
};

export default TransferOptions;
