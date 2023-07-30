import { useState } from 'react'

const TransActionForm = ({ addTransaction, setState }) => {
  const [formValues, setFormValue] = useState({
    desc: '',
    amount: 0,
    type: 'expense',
  })
  const changeHandler = (e) => {
    setFormValue({ ...formValues, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    addTransaction(formValues)
    setState(false)
    setFormValue({
      desc: '',
      amount: 0,
      type: 'expense',
    })
  }

  return (
    <form className="add-tranasaction" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Description"
        name="desc"
        value={formValues.desc}
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder="Amount"
        value={formValues.amount}
        name="amount"
        onChange={changeHandler}
        min={0}
      />
      <span>
        <div className="check-boxes">
          <label className="form-control red">
            <input
              type="radio"
              name="type"
              value="expense"
              onChange={changeHandler}
              checked={formValues.type === 'expense'}
            />
            Expense
          </label>
          <label className="form-control green">
            <input
              type="radio"
              name="type"
              value="income"
              onChange={changeHandler}
              checked={formValues.type === 'income'}
            />
            Income
          </label>
        </div>
        <button type="submit" className="add-tranaction-btn">
          Add TransAction
        </button>
      </span>
    </form>
  )
}

export default TransActionForm
