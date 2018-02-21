import React from 'react'
import { connect } from 'react-redux'

const ProductList = (props) => {

  const { products } = props;

  // these tabs should come from the state but I'm running out of time
  // so I'm hardcoding a bit
  return (
    <div className="product-container">
      {
        products.map(product => {
          return (
            <div key={product.id} className="product">
              <img src={"/images/" + product.image} />
              <h4>Title: {product.name}</h4>
              <span>Price: {product.price} </span>
            </div>
          )
        })
      }
    </div>
  )

}


export default ProductList
