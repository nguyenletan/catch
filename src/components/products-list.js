import React from 'react'
import styled from 'styled-components';
import ProductCard from './product-card'

const Ul = styled('ul')`
  list-style: none;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-wrap: wrap;
`;


const ProductList = ({ products }) => {
  console.log(products)
  const cards = products.map(item => {
    console.log(item)
    return <ProductCard key={item.id} product={item}/>
  })
  
  return (
      <Ul className="product-list">
        {cards}
      </Ul>
    )
}

export default ProductList


