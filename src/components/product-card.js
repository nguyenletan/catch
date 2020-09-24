import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
  border: 1px solid #ddd;
  width: 22%;
  text-align: center;
  margin: 10px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 10px;
`

const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: auto;

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

const ProductDetail =  styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
  height: 156px;
`

const ProductName = styled.h4`
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 5px;
  min-height: 4em;
`

const RetailPrice = styled.span`
  text-decoration: line-through;
  margin-bottom: 5px;
`

const SalePrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

const ProductCard = ({product}) => {
  console.log(product)
  return product ? (
    <Li className="product-card" id={product.id}>
      <ImgWrapper>
        <img src={product.imageUrl} alt={product.name} className="product-img"/>
        {product.quantityAvailable > 0 && (<SoldOut>Sold Out</SoldOut>)}
      </ImgWrapper>
      <ProductDetail>
        <ProductName>{product.name}</ProductName>
        <RetailPrice >${product.retailPrice}</RetailPrice>
        <SalePrice>${product.salePrice}</SalePrice>
      </ProductDetail>
    </Li>) : null
}

export default ProductCard;
