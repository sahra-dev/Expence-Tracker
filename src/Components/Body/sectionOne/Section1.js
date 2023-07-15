import { useState } from 'react'
import SectionTwo from '../TransAction/TransActionCmp'
import OverViewCmp from '../OverViewCmp'

const SectionOne = () => {
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)
  const [transAction , setTransAction] = useState([])

  const addTransaction = (formValues)=>{
    if (formValues.desc.trim().length===0){
      return alert('Please Enter The Values')
    }
    if(formValues.type === 'expense'){
      const lastExpense = expense ;
      setExpense(Number(lastExpense) + Number(formValues.amount))
    }else if ( formValues.type ==='income'){
      const lastIncome = income;
      setIncome(Number(lastIncome) + Number(formValues.amount))
    }
    setTransAction([...transAction , { ...formValues , id:new Date().getTime()}])
    
    // console.log(transAction);
  }

  return (
    <div>
      <OverViewCmp income={income} expense={expense} addTransaction={addTransaction}/>
      <SectionTwo transAction={transAction}/>
    </div>
  )
}

export default SectionOne
