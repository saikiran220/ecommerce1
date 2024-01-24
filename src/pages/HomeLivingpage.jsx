import React, { useEffect, useState } from 'react'
import Header_Nav from '../components/Header_Nav'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'

const HomeLivingpage = () => {
  const productsApi='https://fakestoreapi.com/products'
  const[productsData,setproductsData]=useState({})
  useEffect(()=>{fetchProducts()},[])
  const fetchProducts=async()=>{
    const response=await axios.get(productsApi)
    setproductsData(response.data)
    console.log("response",response)
  }

  return (
    <div>
        <Header_Nav/>
         <Container>
          <Row>
            <Col>
             {productsData.length > 0 && productsData.map((iproductItems,index)=>{
              return(
                <li>
                 <h4>{iproductItems.id}</h4>
                <p>{iproductItems.title}</p>
                
                <h4>{iproductItems.price}</h4>
                </li>
               
              )
             })}
            </Col>
          </Row>
         </Container>
    </div>
  )
}

export default HomeLivingpage
