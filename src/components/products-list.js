import React from 'react'
import styled from 'styled-components'
import ProductCard from './product-card'

const Ul = styled('ul')`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`

const ProductListHead = styled.div`
  margin-right: 10px;
  margin-bottom: 20px;
`

const H2 = styled.h2`
  text-align: center;
  text-transform: capitalize;
  font-size: 2.75rem;
  font-width: bold;
`

const Span = styled.span`
  display: block;
  width: 100%;
  text-align: center;
`




const ProductList = ({ metadata, products }) => {
  const cards = products.map(item => {
    return <ProductCard key={item.id} product={item}/>
  })

  return (
    <>
      <ProductListHead>
        <H2>{metadata.query}</H2>
        <Span>Total: {metadata.total}</Span>
        <Span>Page : {metadata.page} of {metadata.pages}</Span>
      </ProductListHead>
      
      <Ul className="product-list row justify-content-between">
        {cards}
      </Ul>
    
    </>
  )
}

export default ProductList


