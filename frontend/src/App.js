import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/header'
import HeaderComponent from './components/headerComponent'
import CatsGrid from './components/catsGrid'


function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/cats/'
    const fetchItems = async () => {
      const result = await axios(url)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header>
        <HeaderComponent name='Home'/>
        <HeaderComponent name='Posts'/>
        <HeaderComponent name='Cats'/>
        <HeaderComponent name='About Us'/>
      </Header>
      <CatsGrid isLoading={isLoading} items={items} />
    </div>
  );
}


export default App;
