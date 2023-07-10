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
       
        <div className="container">
          
            <div className="row">
                {
                    products.map((val) =>

                        <div className="col-md-3 my-4">
                            <Link className='text-decoration-none' to={`/products/${val.id}`}>
                                <Card border="primary" bg="dark" text='light'>
                                    <Card.Img class="object-fit-contain" height={200} variant="top" src={val.thumbnail} />
                                    <Card.Body >
                                        <Card.Title >{val.title} - {val.price}$</Card.Title>
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
