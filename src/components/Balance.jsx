import { useGlobalState } from "../context/GlobalState"


const Balance = () => {
    
    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    

    return (
    <div>
        {JSON.stringify(amounts, null, 2)}
        <h1>Balance</h1>
    </div>
  )
}

export default Balance