import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import logo from './assets/logo.svg'
import ProductList from './components/products-list'

const url = process.env.REACT_APP_API_ENDPOINT

const Header = styled.header`
  margin-bottom: 10px;
  margin-top: 10px;
`

const SortingOptions = styled.select`
  float: right;
  height: 40px;
  border-radius: 8px;
  margin-top: 48px;
  padding-left: 5px;
  padding-right: 5px;
`

const App = () => {
  const [products, setProducts] = useState([])
  const [metadata, setMetadata] = useState({})
  const [sortingOption, setSortingOption] = useState('desc')
  
  const sort = (products, sortingOption) => {
    return [...products].sort((a, b) => {
      let comparison = 0
      if (a.salePrice > b.salePrice) {
        comparison = 1
      }
      if (a.salePrice < b.salePrice) {
        comparison = -1
      }
      return sortingOption === 'desc' ? comparison * -1 : comparison
    })
  }
  
  const fetchData = async () => {
    const response = await axios.get(url)
    setProducts(sort(response.data.results, sortingOption))
    setMetadata(response.data.metadata)
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  useEffect(() => {
    setProducts([...sort(products, sortingOption)])
  }, [sortingOption])
  
  return (
    <div className="App container">
      <Header>
        <img src={logo} className="app-logo" alt="logo"/>
        <SortingOptions onChange={e => {
          setSortingOption(e.target.value)
        }}>
          <option value="desc">Highest Price</option>
          <option value="asc">Lowest Price</option>
        </SortingOptions>
      </Header>
      
      <ProductList products={products} metadata={metadata}/>
    
    
    </div>
  )
}

export default App
