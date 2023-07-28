import * as React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import axios from 'axios'




export default function Home(props) {
  
  let transactionList = []

  try {
    const getData = async () => {
      const transactionResponse = await axios.get('http://localhost:3001/bank/transactions')
      const transferResponse = await axios.get('http://localhost:3001/bank/transfers')

      props.setTransactions(transactionResponse.data.transactions)
      props.setTransfers(transferResponse.data.transfers)

    }

    
    useEffect(() => {
      props.setIsLoading(true)
      getData();
      props.setIsLoading(false)
    }, []);

  } catch (error) {
    props.setError(error)
  }


  let filteredTransactions = props.filterInputValue  ? props.transactions?.filter(
    (t) => t.description.toLowerCase().includes(props.filterInputValue.toLowerCase())
    ) : props.transactions

   
  function handleOnSubmitNewTransaction () {
    console.log('idk')
  } 

  return (
    <div className="home">
      <AddTransaction 
        isCreating={props.isCreating} 
        setIsCreating={props.setIsCreating} 
        form={props.newTransactionForm} 
        setForm={props.setNewTransactionForm} 
        handleOnSubmit={handleOnSubmitNewTransaction}
      />
      {props.isLoading ? <h1>Loading...</h1> : <BankActivity transactions={ props.inputFilterValue != "" ? filteredTransactions: ''} />}
      {props.error != null ? <h2>{props.error}</h2> : null}
    </div>
  )
}
