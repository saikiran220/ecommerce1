import React, { useState,useEffect } from 'react'
import Header_Nav from '../components/Header_Nav'
import DropdownActionbar from '../components/DropdownActionbar'
import ModelPopup from '../components/ModelPopup'


const Menpage = () => {


  const[show,setShow]=useState(false)
  const handleClose=()=>setShow(false)
  const handleShow=()=>setShow(true)
  const[title,settitle]=useState('')
  const [content,setContent]=useState('')

  
  const modelpopup=(title,content)=>{
    setContent(content)
    settitle(title)
    handleShow()
  }
 
  const handleShirts=()=>{
    console.log(" all Shirts")
    modelpopup("shirts","all shirts")
  }

  
  const handlePants=()=>{
    console.log(" all Pants")
  }
  const handletshirts=()=>{
    console.log(" all T-shirts")
  }

  const actionData=[
    {
      actionTitle:"shirts",action:handleShirts
    },
    {
      actionTitle:"pants",action:handlePants
    },
    {
      actionTitle:"T-shirts", action:handletshirts
    }
  ]
  return (
    <div>
        
      <Header_Nav/>
      <DropdownActionbar actionItems={actionData}/>
      <ModelPopup modelshow={show} handleClose={handleClose} titleheading={title} bodycontent={content} />
      <h1>menpage</h1>
    </div>
  )
}

export default Menpage
