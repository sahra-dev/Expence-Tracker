import { useState } from 'react'
import TransActionForm from './transActionForm/TransActionForm'

const OverViewCmp = ({ expense, income ,addTransaction}) => {
  const [state, setState] = useState(false)
  return (
    <>
    {state ? <TransActionForm addTransaction={addTransaction} setState={setState}/> : ''}
      <section className="header">
        <p>Balance : {income - expense} $</p>
        <button 
        className="add-btn" 
        onClick={() => setState(!state)}
        style={{
          backgroundColor:`${ state ? '#ec4899' : '#65a30d'}`,
          color:'#fff'
        }}>
         {state ? 'Cancel' : 'Add'}
        </button>
      </section>
      <section>
        <div className="expense">
          <p>Expense</p>
          <p className="expense-money">{expense} $</p>
        </div>
        <div className="income">
          <p>Income</p>
          <p className="income-money">{income} $</p>
        </div>
      </section>
    </>
  )
}

export default OverViewCmp
