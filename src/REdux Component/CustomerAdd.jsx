import React, { useState } from 'react'
import CustomerView from './CustomerView'

const CustomerAdd = () => {
    const[intput, setInput]=useState("")
    const[customers, setCustomers]=useState([])
    const addCustomer = () => {
        if(intput) {
            setCustomers([...customers,intput])
            setInput("")
            console.log(customers)
        }   
    }
  return (
    <>
    <div>
    <div>CustomerAdd</div>
    <input type='text' onChange={(e) => {setInput(e.target.value)}} value={intput}/>
    <button onClick={addCustomer}>Add</button>
    </div>
    <CustomerView customers={customers} />
    </>
  )
}

export default CustomerAdd