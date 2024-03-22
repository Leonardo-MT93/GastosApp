import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState";

const TransactionForm = () => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useGlobalState()

  const onSubmit = (e) => {

    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    })


  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" type="text" placeholder="Ingresa una descripción" onChange={(e) => setDescription(e.target.value)}/>
        <input className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" type="number" placeholder="00.00" step="0.01" onChange={(e) => setAmount(e.target.value)}/>
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full" type="submit">Add transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm