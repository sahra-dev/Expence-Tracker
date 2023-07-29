import { useEffect, useState } from 'react'
import SectionTwo from '../TransAction/TransActionCmp'
import OverViewCmp from '../OverViewCmp'

const SectionOne = () => {
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)
  const [transAction , setTransAction] = useState([])
  const [body , setbody]= useState(false)
  useEffect(()=>{
    if(window.innerWidth > 900) setbody(true)
    else setbody(false)
  } , [])
  window.onresize = ()=>{
    if(window.innerWidth > 900) setbody(true)
    else setbody(false)
  }

  const addTransaction = (formValues)=>{
    if (formValues.desc.trim().length===0){
      return alert('Please write description')
    }
    if(formValues.amount=== 0){
      return alert('Please set a value')
    }
    if(formValues.type === 'expense'){
      const lastExpense = expense ;
      setExpense(Number(lastExpense) + Number(formValues.amount))
    }else if ( formValues.type ==='income'){
      const lastIncome = income;
      setIncome(Number(lastIncome) + Number(formValues.amount))
    }
    setTransAction([...transAction , { ...formValues , id:new Date().getTime()}])
  }

  return (
    <div className={body ? 'bodyWith900Up' : 'bodyWidth900Down'}>
      <OverViewCmp body={body} income={income} expense={expense} addTransaction={addTransaction}/>
      <SectionTwo transAction={transAction}/>
    </div>
  )
}

export default SectionOne
