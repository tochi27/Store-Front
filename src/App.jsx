import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import MainContent from './Components/MainContent'

const baseAPIUrl = "https://fakestoreapi.com/"


const App = () => {

  const [pageTitle] = useState("STORE FRONT");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([
    {
      id:1,
      title: null,
      price: null,
      category: null,
      description: null,
      image: null
  },
  ]);

  const getProducts = async() => {
    setLoading(true)
    try {
      const response = await fetch(baseAPIUrl + "products")
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

    return(
      <div className='h-[100svh] bg-[#f5f5f5] overflow-hidden'>
        <Header pageTitle={pageTitle} />
        
        <section className='h-full overflow-auto grid grid-cols-1 md:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr]'>
          <SideBar />
          <MainContent products={products} loading={loading}/>
        </section>
      </div>
    )
  }

export default App