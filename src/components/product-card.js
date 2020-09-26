import React from 'react'
import styled from 'styled-components'

const ProductCardInner = styled.div`
  border: 1px solid #ddd;
  text-align: center;
  min-height: 320px;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 10px;
  margin: 0 auto 25px;
`

const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
`

const SoldOut = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  padding: 5px;
  background-color: orangered;
  color: #fff;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
`

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
  height: 156px;
`

const ProductName = styled.h3`
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 5px;
  min-height: 4em;
  font-weight: bold;
`

const RetailPrice = styled.span`
  text-decoration: line-through;
  margin-bottom: 5px;
`

const SalePrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

const ProductCard = ({ product }) => {
  //console.log(product)
  return product ? (
    <li className="product-card col-lg-3 col-md-4 col-sm-6" id={product.id}>
      <ProductCardInner>
        <ImgWrapper>
          <img src={product.imageUrl} alt={product.name}
               className="product-img"/>
          {product.quantityAvailable === 0 &&
          (<SoldOut className="sold-out">Sold Out</SoldOut>)}
        </ImgWrapper>
        <ProductDetail>
          <ProductName>{product.name}</ProductName>
          {product.retailPrice > 0 &&
          (<RetailPrice className="retail-price">${(product.retailPrice /
            100).toFixed(2)}</RetailPrice>)}
          <SalePrice className="sale-price">${(product.salePrice / 100).toFixed(
            2)}</SalePrice>
        </ProductDetail>
      </ProductCardInner>
    </li>) : null
}

export default ProductCard
