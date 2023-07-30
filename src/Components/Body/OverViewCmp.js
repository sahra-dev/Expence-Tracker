import { useEffect, useState } from 'react'
import TransActionForm from './transActionForm/TransActionForm'

const OverViewCmp = ({body , expense, income, addTransaction , transAction }) => {
  const [state, setState] = useState(false)

  return (
    <div className='sectionFirst'>
      { state || body ?
        <TransActionForm addTransaction={addTransaction} setState={setState} />
        : '' }
      <section className="header">
        <p>Balance : {income - expense} $</p>
        { !body ? (
          <button
            className={`${state ? 'add-btn_cancel' : 'add-btn_add'}`}
            onClick={() => setState(!state)}
          >
            {state ? 'Cancel' : 'Add'}
          </button>
        ) : (
          ''
        )}
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
    </div>
  )
}

export default OverViewCmp
