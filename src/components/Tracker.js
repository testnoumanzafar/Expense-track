import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Tracker = () => {
let {handleSubmit,register}=useForm()

let [first, second]= useState([])
// let array=[]
// console.log(first);
const track= (data)=>{
  //  array=[]
  console.log(data);
  first.push(data);
  // array.push(data)
  second([...first])
  // second(data)
}

let income=0;
let expense=0;
first.forEach(function(value){
  if(value.amount>=0){
    income+=+value.amount;
  }else{expense+=+value.amount}
})

  return (
    <div id='main'>
        <div id='one'>
         <h1>Expense Tracker by Nouman</h1>
<p>CURRENT BALANCE</p>
<span>${income+expense}.00</span> 
</div>
<div id='two'>
    <div id='two1' >
        <h3>INCOME</h3>
        <p>${income}.00</p>
    </div>
    <hr/>
    <div id='two2'>
    <h3>EXPENSE</h3>
        <p>${expense}.00</p>
    </div>
</div>
<div id='three'>
<br />
<h2>Transaction History</h2> 
<hr />

<ul id='listmain'>
  {
  first.map(function(item, index){
    return <li id='list'>
    <button onClick={()=>{
      first.splice(index, 1)
      second([...first])
    }}>X</button>
    <span>{item.text}</span>
    <span>{item.amount}</span>
  </li>
  })
}
 
</ul>

<h2>Add New Transaction</h2>   
<hr /> 
</div>
<form onSubmit={handleSubmit(track)}>
<div id='four'>
<h1>Description</h1> 
{/* <input type="Detail of Transaction" />  */}
<input type='text' {...register("text")} placeholder='Detail of Transaction'/>
<h1>Transaction Amount</h1> 
<input type="number" {...register("amount")} placeholder='Doller value of Traction' /> 
<button>Add Transaction</button>
</div>
</form>
    </div>
  )
}

export default Tracker