import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

  }, [])

  return (
    <div className="container">
      <div className="mt-5 text-center">
        <h3>Categories</h3>
      </div>

      <div className="row">
        {
          categories.map((val) =>
            <div>
              <Link  to={`/products/category/${val}`}>
                
                    <p className="container my-0"> {val.toLowerCase().charAt(0).toUpperCase() + val.slice(1).replace('-', ' ')}</p>
                 
              </Link>
            </div>
          )
        }

      </div>
    </div>
  )
}
