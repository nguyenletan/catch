import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ProductCard from './product-card'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders with product detail', () => {
  const mockObject = {
    'id': 'f56cb6f2-a926-4ff4-80be-4518b0d1997d',
    'name': 'Havaianas Top Thongs -  Black',
    'salePrice': 1499,
    'retailPrice': 2500,
    'imageUrl': 'https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg',
    'quantityAvailable': 0,
  }
  act(() => {
    render(<ProductCard product={mockObject}/>, container)
  })
  
  expect(
    container.querySelector('h3').textContent,
  ).toEqual('Havaianas Top Thongs -  Black')
  
  expect(
    container.querySelector('.retail-price').textContent
  ).toEqual('$25.00')
  
  expect(
    container.querySelector('img').getAttribute('src')
  ).toEqual('https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg')
  
  expect(
    container.querySelector('.sold-out').textContent
  ).toEqual('Sold Out')
})

it('renders empty when product is null', () => {
  const mockObject = null
  act(() => {
    render(<ProductCard product={mockObject}/>, container)
  })
  
  expect(
    container.querySelector('li'),
  ).toBeNull()
  
})
