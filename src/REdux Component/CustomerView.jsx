import React from 'react'

const CustomerView = (props) => {
  return (
    <>
    <div>
    <div>CustomerView</div>
    <ul style={{listStyle:'none'}}>
        {
            props.customers.map(customer => <li>{customer}</li>)
        }
    </ul>
    </div>
    </>
  )
}

export default CustomerView