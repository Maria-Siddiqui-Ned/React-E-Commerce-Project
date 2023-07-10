import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function CategoryPage() {

    const { categoryName } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products))

    }, [categoryName])



    return (
        
        <div className="container">
        <p mt-5><Link to="/">Home</Link>  / <Link to="/products">Products</Link> / {categoryName}</p>

            <div className="my-5 text-center">
                <h1>{categoryName.toUpperCase()}</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam architecto!</p>
            </div>

            <div className="row">
                {
                    products.map((val, key) =>

                        <div className="col-md-3 my-4" key={key}>
                            <Link className='text-decoration-none' to={`/products/${val.id}`}>
                                <Card height={400}  border="primary" bg="dark" text='light'>
                                    <Card.Img class="object-fit-contain" height={200} variant="top" src={val.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{val.title} - {val.price}$</Card.Title>
                                        <Card.Text text='primary' className='text-truncate' >{val.description}
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
