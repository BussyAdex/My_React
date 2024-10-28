import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { productId } = useParams();
  
  return (
    <div>
     Details
     <p>Product ID : {productId}</p> 
    </div>
  )
}

export default ProductDetails
