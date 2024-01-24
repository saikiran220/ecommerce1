import React, { useEffect, useState } from 'react'
import Header_Nav from '../components/Header_Nav'
import axios from 'axios'
import { Button, Container, Row, Col, AlertLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


const Homepage = () => {

  const apiUrl = 'http://localhost:4000/products'

  const [searchText, setSearchText] = useState("");

  const [products, setProducts] = useState([])

  useEffect(() => { ferchData() }, [])

  const ferchData = async () => {
    const response = await axios.get(apiUrl)
    setProducts(response.data)
    console.log(response)
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log('event', e)
  };
const handleClick=(id,quantity)=>{
  console.log('id',id)
  console.log('quantity',quantity)  
}
const handleParams=(items)=>{
   console.log(items)
   setProducts(items)
}
  return (
    <>
      <Header_Nav />
      <Container fluid>
        <Row>
          <Col md={5}>
            <label className='label' >Search items</label>
            <input type="text" className="form-control" placeholder='search' name='searchText' value={searchText} onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className='d-flex flex-wrap'>
              {products.length > 0 && products.filter(items=>{
                return items.productName.toLowerCase().indexOf(searchText.toLowerCase())>-1 || items.productVersion.toLowerCase().indexOf(searchText.toLowerCase())>-1
              })
              .map((items, index) => {
                return (
                  <div className='m-2 p-2 bg-light rounded'>
                    <img key={index} className='card shadow m-2' src={'/images/' + items.productImages[0]} />
                    <h3 className='m-1'>{items.productName}</h3>
                    <h5 className='m-1'>{items.productVersion}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h5 className='m-1'>$ {items.productPrice}</h5>
                      <i className='bg-dark text-white p-2 rounded '><FaShoppingCart onClick={()=>handleClick(items.id,2)} /></i>
                      
                    </div>
                  </div>

                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
      <h1>Homepage</h1>
    </>
  )
}

export default Homepage

