import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function CategoriesSection() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

  }, [])

  // const { categoryName } = useParams()
  // const [products, setProducts] = useState([])


  // useEffect(() => {
  //     axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products))

  // }, [categoryName])


  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>Categories</h1>
        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
      </div>

      <div className="row">
        {
          categories.map((val, key) =>
            <div  className="col-md-3 my-3" key={key} >
              <div className='category'>
              <Link className='text-decoration-none' to={`/products/category/${val}`}>
                <Card  bg="warning">
<<<<<<< HEAD
                {/* <Card.Img class="object-fit-fill" height={200} variant="top" src={val.products.category.thumbnail} /> */}
=======
>>>>>>> 587a23f6015ac9fbc48a17e9cc7d6cfda6c1dd27
                  <Card.Body >
                    <Card.Title align="center">{val.toUpperCase().replace('-', ' ')}</Card.Title>
                    {/* <Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title> */}
                  </Card.Body>
                </Card>
              </Link>
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}
