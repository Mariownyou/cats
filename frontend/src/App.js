import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/header'
import Grid from './components/grid'
import Container from '@material-ui/core/Container';


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
    <Container>
      <Header />
      <Grid isLoading={isLoading} items={items} />
    </Container>
  );
}


export default App;
