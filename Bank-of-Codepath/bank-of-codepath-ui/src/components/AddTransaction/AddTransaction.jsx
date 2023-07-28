import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction(props) {
  let form = props.form;
  function handleOnFormFieldChange(change) {
    props.setForm(form => ({...form, 
      value: change.target.name,
      description: change.target.value,})
      )
      console.log(form)
  }
  function handleOnSubmit() {
    console.log('pressed!')
  }
  

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm 
        handleOnSubmit={handleOnSubmit} 
        handleOnFormFieldChange={handleOnFormFieldChange}
        form={props.form}
        isCreating={props.isCreating}
        />
    </div>
  )
}

export function AddTransactionForm(props) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input name={'description'} value={props.form?.description || ""}/>
        </div>
        <div className="field">
          <label>Category</label>
          <input name={'category'} value={props.form?.category || ""}/>
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input name={'amount'} value={props.form?.amount || ""}/>
        </div>

        <button className="btn add-transaction" type="submit">
          Add
        </button>
      </div>
    </div>
  )
}
