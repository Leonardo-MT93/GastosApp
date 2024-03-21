import Balance from "./components/Balance"
import Header from "./components/Header"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import { GlobalProvider } from "./context/GlobalState"

const App = () => {


  return (
    <GlobalProvider>
      <Header/>
      <TransactionForm/>
      <TransactionList/>
      <Balance/>
    </GlobalProvider>
  )
}

export default App