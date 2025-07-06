import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import StickyBottomNav from "../components/stickyNavv";
// import BottomNav from "./stickyNav";

// const payees = [
//   {
//     id: 1,
//     name: "My Cash Rewards credit card",
//     type: "Cash Rewards",
//     amount: "$100.00",
//     date: "Jul 15",
//     icon: "🏦",
//   },
//   {
//     id: 2,
//     name: "Energy Co.",
//     type: "Energy",
//     amount: "$45.90",
//     date: "Jul 16",
//     icon: "💡",
//   },
//   {
//     id: 3,
//     name: "Water Bill",
//     type: "Water",
//     amount: "$25.90",
//     date: "Jul 16",
//     icon: "💧",
//   },
// ];

const BillPay: React.FC = () => {
//   const [selectedId, setSelectedId] = useState<number | null>(2);
   const [userName, setUserName] = useState<string>("");


     useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
   
      setUserName(user.firstName || "");
     
    }
  }, []);


  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen  font-sans">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-lg font-medium">Bill Pay</h1>
      </div>

      {/* Search */}
      <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center mb-4">
       <input
  type="text"
  placeholder={`Hi, ${userName}. How can I help?`}
  className="bg-transparent w-full outline-none"
/>

        <div className="text-red-600 font-bold text-lg">☰</div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around text-sm font-medium border-b mb-2">
        <button className="border-b-2 border-red-500 text-red-600 pb-1">Pay</button>
        <button className="text-gray-500 pb-1">Activity</button>
      </div>

      {/* eBills */}
      <div className="bg-gray-100 rounded-lg p-3 mb-4 text-sm">
        <h2 className="font-semibold text-gray-600 mb-1">MY EBILLS & REMINDERS</h2>
        <p className="text-gray-500">
          You don't have any unpaid eBills or reminders right now.
        </p>
      </div>

      {/* Payees */}
      <div className="bg-gray-50 border rounded-lg p-3 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-700">PAYEES</h2>
          <button className="flex items-center text-blue-600 text-sm gap-1">
            <FaPlus /> Add Payee
          </button>
        </div>

        {/* <ul className="space-y-3">
          {payees.map((payee) => (
            <li
              key={payee.id}
              onClick={() => setSelectedId(payee.id)}
              className="flex justify-between items-center p-2 bg-white border rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <div>
                <p className="text-blue-700 font-medium">{payee.name}</p>
                <p className="text-gray-500 text-sm">{payee.type}</p>
                <p className="text-gray-500 text-sm">
                  Paid {payee.amount} - {payee.date}
                </p>
              </div>
              <div className="w-6 h-6 border-2 rounded-full flex items-center justify-center">
                {selectedId === payee.id && (
                  <div className="w-4 h-4 rounded-full bg-blue-700 flex items-center justify-center text-white text-[10px]">
                    <FaCheck />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul> */}

        <p className="mt-3 text-blue-600 text-sm text-center cursor-pointer">
          View Hidden Payees
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-auto gap-2">
        <button className="flex-1 border border-gray-300 py-2 rounded-full text-gray-700">
          CANCEL
        </button>
        <button className="flex-1 bg-blue-800 text-white py-2 rounded-full">
          PAY
        </button>
      </div>

      <StickyBottomNav/>
      {/* <BottomNav/> */}
    </div>
  );
};

export default BillPay;
