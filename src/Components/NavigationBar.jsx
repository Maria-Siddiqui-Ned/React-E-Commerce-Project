import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function NavigationBar() {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

    }, [])

    return (


        // const [user, setUser] = useState(true)
        //   return (
        //     <>
        //       {
        //         user

        //           ?
        //           (
        <Navbar bg="warning" expand="lg">
            <Container>
                <Link className='navbar-brand' to="/">Let's Shop</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        {/* <Link className='nav-link' to="/products">Products</Link> */}
                        <Link className='nav-link' to="/AllProducts">All Products</Link>
                        <Link className='nav-link' to="/AllCategories">Categories</Link>

<<<<<<< HEAD
                        <NavDropdown title="Items" id="basic-nav-dropdown">
                            {categories.map((val, key) => (
                                <Link to={`/products/category/${val}`}>
                                    <NavDropdown.Item key={key}>{val}</NavDropdown.Item>
                                </Link>
                            ))}
=======

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>  */}

                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                        {/* <Link to={`/products/category/${product.category}`}>{product.category}</Link> */}
                            <NavDropdown.Item href="#action/3.1">categories.map((val))</NavDropdown.Item>
>>>>>>> 587a23f6015ac9fbc48a17e9cc7d6cfda6c1dd27

                        </NavDropdown>

                        <Link className='ms-4 btn btn-dark' to="/login">Login</Link>
                        <Link className='ms-4 btn btn-dark' to="/signup">SignUp</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        //     )
        //     :
        //     (
        //         <Navbar bg="light" expand="lg">
        //         <Container>
        //             <Link className='navbar-brand' to="/">Let's Shop</Link>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="ms-auto">
        //                     <Link className='nav-link' to="/">Home</Link>
        //                     <Link className='nav-link' to="/products">Products</Link>
        //                     <Link className='ms-4 btn btn-dark' to="/login">Login</Link>
        //                     <Link className='ms-4 btn btn-dark' to="/signup">SignUp</Link>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>

        //         )

        //     }
        //   </>
        // )
    );
}

export default NavigationBar;