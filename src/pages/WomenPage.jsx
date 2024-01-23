import React, { useState } from 'react'
import Header_Nav from '../components/Header_Nav'
// import { AuthProvider, useAuth } from './AuthContext'
import { useAuth } from './AuthContext'

const WomenPage = () => {
  const {contextValue}=useAuth()
  
 
  return (
    
    <div>
        <Header_Nav/>
        
        <h4>{contextValue}</h4>
      <h1>womenpage</h1>

    </div>
  )
}

export default WomenPage
