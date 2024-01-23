import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, Form, InputGroup, Button,Dropdown } from 'react-bootstrap'
import { useAuth } from '../pages/AuthContext'
import { CgProfile } from "react-icons/cg";


const Header_Nav = () => {

    const { logout } = useAuth()

    const handlelogout = () => {
        logout()
    }
    // const {userdetails}=useAuth()
    const {user}=useAuth()
    console.log( 'user',user)
    return (
        
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/"><img src={"/myntra_logo2.png"} style={{ height: "80px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant="underline" defaultActiveKey="/home">
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/men'>Men</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/women'>Women</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/kids'>Kids</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/homeliving'>Home&Living</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/beauty'>Beauty</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/studio'>Studio</NavLink>
                                </li>
                            </ul>

                            <Form inline>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="search item"
                                        aria-label="Search"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/profile'>Profile</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/wishlist'>Wishlist</NavLink>
                                </li>
                                <li className='nav-item'>
                                    
                                       <Dropdown className='profile'>
                                            <Dropdown.Toggle  id="dropdown-basic">
                                                <CgProfile />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {/* <Dropdown.Item><Button onClick={() => handlelogout()}>logOut</Button></Dropdown.Item> */}
                                                <Dropdown.Item href="#/action-2">{user}</Dropdown.Item>
                                                <Dropdown.Item  onClick={() => handlelogout()}>logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                </li>
                                <li className='nav-item'>
                                    {/* <NavLink className='nav-link' to='/groups'>Groups</NavLink> */}
                                    
                                </li>
                            </ul>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header_Nav
