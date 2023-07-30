import { useEffect, useState } from 'react'
import SectionTwo from '../TransAction/TransActionCmp'
import OverViewCmp from '../OverViewCmp'
import http from '../../../httpServices'

const SectionOne = () => {
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)
  const [transAction, setTransAction] = useState([])
  const [body, setbody] = useState(false)
  const getTransAction = async () => {
    await http
      .get('/expenseTracker')
      .then((res) => setTransAction(res.data))
      .catch((err) => console.log(err.message))
  }
  const caculateTransAction = ()=>{
    let inc = 0 
    let exp = 0
    transAction.map(item => {
     if(item.type === 'expense'){
      exp += Number(item.amount)
     }else if (item.type === 'income') {
      inc += Number(item.amount)
    }
  })
  setExpense(exp)
  setIncome(inc)
  }
  const deleteHandler = (id)=>{
    console.log(id);
    http.delete(`/expenseTracker/${id}`)
    getTransAction()
    // caculateTransAction()
  }
  useEffect(() => {
    if (window.innerWidth > 900) setbody(true)
    else setbody(false)
    getTransAction()
    caculateTransAction()
  }, [transAction])
  window.onresize = () => {
    if (window.innerWidth > 900) setbody(true)
    else setbody(false)
  }

  const addTransaction = (formValues) => {
    if (formValues.desc.trim().length === 0) {
      return alert('Please write description')
    }
    if (formValues.amount === 0) {
      return alert('Please set a value')
    }
    caculateTransAction()
    http.post('/expenseTracker', { ...formValues })
    getTransAction('/expenseTracker')
  }

  return (
    <div className={body ? 'bodyWith900Up' : 'bodyWidth900Down'}>
      <OverViewCmp
        body={body}
        income={income}
        expense={expense}
        transAction={transAction}
        addTransaction={addTransaction}
      />
      <SectionTwo transAction={transAction} deleteHandler={deleteHandler} />
    </div>
  )
}

export default SectionOne
