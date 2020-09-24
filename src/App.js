import * as axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'
import ProductList from './components/products-list'

const url = 'https://raw.githubusercontent.com/nguyenletan/movie-apollo/master/response.json';


const App = () => {
  const [products, fetchProducts] = useState([])
  
  async function fetchData () {
    const response = await axios(url);
    // let { data } = res.data;
    console.log(response.data);
    fetchProducts(response.data.results);
  }
  
  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo"/>
      </header>
      <div className="content">
        <ProductList products={products}/>
      </div>
    </div>
  )
}

export default App
