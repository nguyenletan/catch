import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ProductsList from './products-list'

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

it('renders with list of product', () => {
  const mockProducts = [
    {
      'id': 'f56cb6f2-a926-4ff4-80be-4518b0d1997d',
      'name': 'Havaianas Top Thongs -  Black',
      'salePrice': 1499,
      'retailPrice': 2500,
      'imageUrl': 'https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg',
      'quantityAvailable': 0,
    },
    {
      'id': '46397d56-2726-45de-8514-d8ed6984a600',
      'name': '4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle',
      'salePrice': 5900,
      'retailPrice': 18417,
      'imageUrl': 'https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg',
      'quantityAvailable': 56,
    },
    {
      'id': '1b7d187a-d015-42ee-97e4-669b27b8d92f',
      'name': 'Havaianas Slim Thongs - Black',
      'salePrice': 1999,
      'retailPrice': 3000,
      'imageUrl': 'https://s.catch.com.au/images/product/0001/1891/57ac11b61d049250349167_w200.jpg',
      'quantityAvailable': 33,
    },
    {
      'id': '6f059b72-40e3-4ec1-9f1f-dbc520e304f3',
      'name': 'Dyson V6 Animal Extra Cordless Handstick Vacuum Cleaner',
      'salePrice': 39800,
      'retailPrice': 54900,
      'imageUrl': 'https://s.catch.com.au/images/product/0013/13454/5c6b391a34c8f777276564_w200.jpg',
      'quantityAvailable': 14,
    }]
  
  const mockMetadata = {
    "query": "best sellers",
    "total": 300,
    "page": 2,
    "pages": 10
  };
  
  act(() => {
    render(<ProductsList products={mockProducts} metadata={mockMetadata}/>, container)
  })
  
  expect(
    container.querySelectorAll('li').length,
  ).toEqual(4)
  
  expect(
    container.querySelector('.page').textContent,
  ).toEqual(`Page : ${mockMetadata.page} of ${mockMetadata.pages}`)
  
  expect(
    container.querySelector('.total').textContent,
  ).toEqual(`Total: ${mockMetadata.total}`)
  
  expect(
    container.querySelector('h2').textContent,
  ).toEqual(mockMetadata.query)
  
})

it('renders with empty list', () => {
  const mockObjects = []
  
  act(() => {
    render(<ProductsList products={mockObjects}/>, container)
  })
  
  expect(
    container.querySelectorAll('li').length,
  ).toEqual(0)
  
})
