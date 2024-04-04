
export const useCalculator = (users, expenses) => {
  const totalSalaries = users.reduce((acc, user) => acc + user.salary * 1, 0);

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.expense * 1,
    0
  );
  const usersWithPercentage = users.map((user) => ({
    ...user,
    percentage: (user.salary * 1 * 100) / totalSalaries,
  }));

  return {
    totalSalaries,
    totalExpenses,
    usersWithPercentage,
  };
};
