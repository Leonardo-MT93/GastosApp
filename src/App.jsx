import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white flex justify-center items-center ">
        <div className="mx-auto w-[80%] lg:w-[60%] border border-red-600">
          <Header />
          <div className="bg-zinc-800 rounded-lg p-10 flex justify-around gap-x-2 border border-red-200">
            <div className="w-[40%] flex flex-col">
              <IncomeExpenses />
              <Balance />
            </div>
            <div className="w-[40%] flex flex-col">
              <TransactionForm />
            </div>
          </div>
          <div className="w-full border border-yellow-400">
            <ExpenseChart />
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
