import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'
import { Link} from 'react-router-dom'



export default function ProductPage() {

    const { productID } = useParams()
    const [product, setproduct] = useState({})
    const [review, setReview] = useState("")
    const [ratingstar, setratingStar] = useState(0)
    const [productQuantity, setproductQuantity] = useState(1)

    const ratingChanged = (newRating) => {
        setratingStar(newRating)
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)


        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thanks for reviewing our product',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })

        setReview('')
        setratingStar(0)

    }

    const addToCart = () => {

        const payload = {
            ...product,
            productQuantity,
            totalPrice: product.price * productQuantity
        }

        console.log(payload)

        Swal.fire({
            title: 'Added to Cart!',
            text: 'Check your Cart for Check Out',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productID}`).then(json => setproduct(json.data))

    }, [])


    return (
        <div className="container my-4">
        <p my-4><Link to="/">Home</Link>  / <Link to="/AllProducts">Products</Link> / <Link to={`/products/category/${product.category}`}>{product.category}</Link> / {product.title}  </p>

            <div className="row">
                <div className="col-md-6">

                    <div className="text-center my-5">
                        <h2 class="text-primary">{product.title} - {product.price}$</h2>
                        <p className="text-secondary">{product.description}</p>
                        <p className="text-secondary"><b>Brand</b> : {product.brand}</p>
                        <p className="text-secondary"><b>Discount</b> : {product.discountPercentage} %</p>


                        {/* <img>{product.thumbnail}</img> */}

                        <div className='d-flex justify-content-center'>
                            <ReactStars
                                count={5}
                                size={24}
                                edit={false}
                                value={product.rating}
                                color2={'#ffd700'}
                            />
                        </div>
                    </div>

                    {
                        product?.images?.length > 0 && <ImageSection images={product.images} />
                    }

                </div>


                <div className="col-md-6">

                    <div className="container">
                        <div className='mb-5'>
                            <h2 className="text-center text-success mt-5" >Reviews Us</h2>
                            <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.</p>
                        </div>
                        <div>

                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    defaultValue={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>

                            <div className='mt-3'>

                                Rate Us :
                                <div className="d-flex align-items-center">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={ratingstar}
                                        onChange={ratingChanged}
                                        color2={'#ffd700'}
                                    />
                                    <span className='ms-3'>({ratingstar})</span>
                                </div>
                            </div>
                            <button className='my-3 btn btn-primary w-100' onClick={submitReview}>Submit Review</button>

                            <div className="text-center my-3 ">
                                <span>Quantity</span>
                                <button className="btn btn-light mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
                                {productQuantity}
                                <button className="btn btn-light mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
                            </div>


                            <button className='btn btn-success w-100' onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
