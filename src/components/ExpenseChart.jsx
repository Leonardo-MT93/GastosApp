import { VictoryLabel, VictoryPie } from "victory";
import { useGlobalState } from "../context/GlobalState";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);

  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const totalExpense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

    const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);
    const totalIncomePercentage = 100 - totalExpensesPercentage;
  return (
    <VictoryPie
      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      data={[
        { x: "Rent", y: totalExpensesPercentage },
        { x: "Food", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 2000,
      }}
      labels={({ datum }) => `${datum.x}: $${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
};

export default ExpenseChart;
