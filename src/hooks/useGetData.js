export const useGetData = () => {
    const sessionData = localStorage.getItem("session");
    const usersData = sessionData ? JSON.parse(sessionData).users : [];

    const expensesData = localStorage.getItem("expenses");
    const expenses = expensesData ? JSON.parse(expensesData) : [];
    return {usersData, expenses}; 
}

