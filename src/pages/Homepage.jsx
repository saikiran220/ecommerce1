import React, { useEffect, useState } from 'react'
import Header_Nav from '../components/Header_Nav'
import axios from 'axios'
import { Button, Container, Row, Col } from 'react-bootstrap'
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
                return items.productName.toLowerCase().indexOf(searchText.toLocaleLowerCase())>-1
              })
              .map((items, index) => {
                return (
                  <div className='m-2 p-2 bg-light rounded'>
                    <img className='card shadow m-2' src={'/images/' + items.productImages[0]} />
                    <h3 className='m-1'>{items.productName}</h3>
                    <h5 className='m-1'>{items.productVersion}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h5 className='m-1'>$ {items.productPrice}</h5>
                      <i className='bg-dark text-white p-2 rounded'><FaShoppingCart /></i>
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

