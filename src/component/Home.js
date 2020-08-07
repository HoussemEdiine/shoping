import React from 'react'
import ProductCard from "./ProductCard"

const Home = (props) => {
    return (
        <div>
             <ProductCard produits={props.produits} ></ProductCard>
        </div>
    )
}

export default Home

