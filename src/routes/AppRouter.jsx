import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import UsersFormPage from "../pages/UsersFormPage"
import ExpensesPage from "../pages/ExpensesPage"
import BalancePage from "../pages/BalancePage"

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersFormPage/>}/>
            <Route path="/gastos" element={<ExpensesPage/>}/>
            <Route path="/balance" element={<BalancePage/>}/>
            <Route path="*" element={<HomePage/>} />
        </Routes>
    </>

  )
}

export default AppRouter