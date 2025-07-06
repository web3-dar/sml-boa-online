import { useEffect, useState } from "react";
import StickyBottomNav from "../components/stickyNavv";

type Transaction = {
  date: string;
  description: string;
  amount: string;
  balance: string;
  type: "debit" | "credit";
};

const transactions: Transaction[] = [
  // 2025 Transactions
  // {
  //   date: "Jul 04, 2025",
  //   description: "Deposit: Incoming Funds",
  //   amount: "$290,000.00",
  //   balance: "$344,955.50",
  //   type: "credit",
  // },
  {
    date: "Jun 05, 2025",
    description: "Tax",
    amount: "-$50,750.00",
    balance: "$54,955.50",
    type: "debit",
  },
  {
    date: "May 05, 2025",
    description: "Monthly Service Fee",
    amount: "-$2.50",
    balance: "$54,958.00",
    type: "debit",
  },
  {
    date: "Apr 05, 2025",
    description: "Monthly Service Fee",
    amount: "-$2.50",
    balance: "$54,960.50",
    type: "debit",
  },
  {
    date: "Mar 05, 2025",
    description: "Monthly Service Fee",
    amount: "-$2.50",
    balance: "$54,963.00",
    type: "debit",
  },
  {
    date: "Feb 05, 2025",
    description: "Monthly Service Fee",
    amount: "-$2.50",
    balance: "$54,965.50",
    type: "debit",
  },
  {
    date: "Jan 05, 2025",
    description: "Monthly Service Fee",
    amount: "-$2.50",
    balance: "$54,968.00",
    type: "debit",
  },

  // 2024 Transactions
  {
    date: "Dec 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,970.50",
    type: "debit",
  },
  {
    date: "Nov 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,972.50",
    type: "debit",
  },
  {
    date: "Oct 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,974.50",
    type: "debit",
  },
  {
    date: "Sep 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,976.50",
    type: "debit",
  },
  {
    date: "Aug 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,978.50",
    type: "debit",
  },
  {
    date: "Jul 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,980.50",
    type: "debit",
  },
  {
    date: "Jun 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,982.50",
    type: "debit",
  },
  {
    date: "May 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,984.50",
    type: "debit",
  },
  {
    date: "Apr 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,986.50",
    type: "debit",
  },
  {
    date: "Mar 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,988.50",
    type: "debit",
  },
  {
    date: "Feb 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,990.50",
    type: "debit",
  },
  {
    date: "Jan 05, 2024",
    description: "Monthly Service Fee",
    amount: "-$2.00",
    balance: "$54,992.50",
    type: "debit",
  },

 
  {
    date: "Jun 01, 2023",
    description: "Monthly Service Fee",
    amount: "-$2.50",
    balance: "$64,494.50",
    type: "debit",
  },
 
  {
    date: "Feb 01, 2023",
    description: "Monthly Service Fee",
    amount: "-$3.00",
    balance: "$76,497.00",
    type: "debit",
  },

];


const TransactionHistory = () => {
  const [userAmount, setUserAmount] = useState<number>(0);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [userName, setUserName] = useState<string>("");
  // const [accountType, setAccountType] = useState<string>("");
  // const [subType, setSubType] = useState<string>("");
  // const [userEmail, setUserEmail] = useState<string>("");
  const [userLastName, setLastName] = useState<string>("");
  // const [useMidname, setMiddleName] = useState<string>("");
  // const [AcctNum, setAcctNumber] = useState<string>("");
  // const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserAmount(user.amount || 0);
       
      setUserName(user.firstName || "");
      setLastName(user.lastName || "");
      // setMiddleName(user.middleName || "");
      // setAccountType(user.accountType || "Nll");
      // setSubType(user.accountSubType || "");
      } catch (err) {
        console.error("Error parsing user:", err);
      }
    }
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8 p-4">
      <div className="text-center">
        <h2 className="text-lg font-semibold">ADV PLUS BANKING - 1234</h2>
        <p className="text-2xl font-bold mt-2">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(userAmount)}
        </p>
        <p className="text-sm text-gray-500">Available balance</p>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-600 font-semibold text-sm mb-2">
          RECENT TRANSACTIONS
        </h3>
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div
              key={index}
              className="border-b pb-2 cursor-pointer"
              onClick={() => setSelectedTransaction(tx)}
            >
              <p className="text-xs text-gray-500">{tx.date}</p>
              <p className="text-sm font-medium text-gray-800">{tx.description}</p>
              <div className="flex justify-between items-center mt-1">
                <span className={`font-semibold ${tx.type === "debit" ? "text-red-500" : "text-green-600"}`}>
                  {tx.amount}
                </span>
                <span className="text-xs text-gray-400">Bal: {tx.balance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTransaction && (
         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-xl relative">
            <button
              onClick={() => setSelectedTransaction(null)}
              className="absolute top-2 right-4 text-gray-500 text-xl hover:text-black"
            >
              &times;
            </button>

            {/* <h2 className="text-xl font-bold text-center mb-6">CKT Reserved & Trust Bank</h2> */}

            <div className="mb-6 text-sm text-gray-700">
              <p>Welcome, {userName} {userLastName}</p>
              {/* <p>Account Number: <strong>{AcctNum}</strong></p> */}
              <p>Account Balance: <strong>${userAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></p>
              <p>Last Deposit Date: <strong>July 3, 2024</strong></p>
              <p>Deposit Reference Number: <strong>2234-WN7823490</strong></p>
              <p className="text-green-600 font-semibold mt-2">Status: Funds Available for Payout</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm text-left mb-6">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border px-3 py-2">Date</th>
                    <th className="border px-3 py-2">Type</th>
                    <th className="border px-3 py-2">Amount</th>
                    <th className="border px-3 py-2">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
              <td className="border px-3 py-2"> <p> {selectedTransaction.date}</p></td>
              <td className="border px-3 py-2"> {selectedTransaction.description}</td>
              <td className="border px-3 py-2">                <span
                  className={
                    selectedTransaction.type === "debit"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {selectedTransaction.amount}
                </span></td>
              <td className="border px-3 py-2"> {selectedTransaction.type.toUpperCase()}</td>
            </tr>
          
                </tbody>
              </table>
            </div>

            {/* <p className="text-xs text-gray-500 text-center">
              This dashboard reflects the most current status of your winnings under the Camellia K Talachi Mega Bonus Program.<br />
              Your deposit has been securely processed by CKT National Reserve. If you have any questions or would like to request a payout, please contact your claim specialist directly.
            </p> */}
          </div>
        </div>
      )}

      <StickyBottomNav />
    </div>
  );
};

export default TransactionHistory;
