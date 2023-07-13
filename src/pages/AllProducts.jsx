<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function AllProducts() {

    const {ProductsName } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))

    }, [ProductsName])

    return (
       
        <div className="container my-4">
          
            <div className="row">
                {
                    products.map((val) =>

                        <div className="col-md-3 my-3">
                            <Link className='text-decoration-none' to={`/products/${val.id}`}>
                                <Card border="primary" bg="dark" text='light'>
                                    <Card.Img class="object-fit-fill" height={200} variant="top" src={val.thumbnail} />
                                    <Card.Body >
                                        {/* <Card.Title >{val.title} - {val.price}$</Card.Title> */}
                                        <Card.Title className='text-truncate' >{val.title}</Card.Title>
                                        <Card.Title >{val.price}$</Card.Title>
                                        <Card.Text text='primary' className='text-truncate'>{val.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
=======
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function AllProducts() {

    const {ProductsName } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))

    }, [ProductsName])

    return (
       
        <div className="container my-4">
          
            <div className="row">
                {
                    products.map((val) =>

                        <div className="col-md-3 my-3">
                            <Link className='text-decoration-none' to={`/products/${val.id}`}>
                                <Card border="primary" bg="dark" text='light'>
                                    <Card.Img class="object-fit-fill" height={200} variant="top" src={val.thumbnail} />
                                    <Card.Body >
                                        {/* <Card.Title >{val.title} - {val.price}$</Card.Title> */}
                                        <Card.Title className='text-truncate' >{val.title}</Card.Title>
                                        <Card.Title >{val.price}$</Card.Title>
                                        <Card.Text text='primary' className='text-truncate'>{val.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
>>>>>>> 587a23f6015ac9fbc48a17e9cc7d6cfda6c1dd27
