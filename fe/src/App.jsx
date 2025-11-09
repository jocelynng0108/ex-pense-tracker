import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { getTransactions, getBalance } from "./services/api";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState({ income: 0, expense: 0, balance: 0 });

  const refresh = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
    const bal = await getBalance();
    setBalance(bal.data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
          💰 Expense Tracker
        </h1>

        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
          <p className="font-semibold">Saldo Saat Ini</p>
          <p className="text-2xl text-blue-600 font-bold">
            Rp {balance.balance.toLocaleString()}
          </p>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <p>Pemasukan: Rp {balance.income.toLocaleString()}</p>
            <p>Pengeluaran: Rp {balance.expense.toLocaleString()}</p>
          </div>
        </div>

        <ExpenseForm refresh={refresh} />
        <ExpenseList transactions={transactions} refresh={refresh} />
      </div>
    </div>
  );
}
