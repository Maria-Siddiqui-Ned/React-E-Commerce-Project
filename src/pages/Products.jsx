import React from 'react'
import Categories from '../Components/Categories'
import AllProductsSection from '../Components/AllProductsSection'

export default function Products() {
    return (
        <>
            <div className="col-md-4 mx-10">
                <Categories />
            </div>
            <div className="col-md-8">
                <AllProductsSection />
            </div>

        </>
    )
}
