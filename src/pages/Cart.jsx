import React from 'react'
import Header_Nav from '../components/Header_Nav'
import { useAuth } from './AuthContext'

const Cart = () => {
    const{storeSomeData}=useAuth()
  return (
    <div>
       <Header_Nav/>
       {storeSomeData}
      <h1>cart page</h1>
    </div>
  )
}

export default Cart
