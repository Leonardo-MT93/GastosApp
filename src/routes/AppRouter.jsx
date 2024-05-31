import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import UsersFormPage from "../pages/UsersFormPage"
import ExpensesPage from "../pages/ExpensesPage"
import BalancePage from "../pages/BalancePage"
import ListOfUsers from "../pages/ListOfUsers"
import ListOfExpenses from "../pages/ListOfExpenses"

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersFormPage/>}/>
            <Route path="/expense" element={<ExpensesPage/>}/>
            <Route path="/balance" element={<BalancePage/>}/>
            <Route path="/all-users" element={<ListOfUsers/>} />
            <Route path="/all-expenses" element={<ListOfExpenses/>} />
            <Route path="/edit-expense/:id" element={<ExpensesPage/>}/>
            <Route path="*" element={<HomePage/>} />
        </Routes>
    </>

  )
}

export default AppRouter