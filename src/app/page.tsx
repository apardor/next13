'use client';
import Link from 'next/link'
import React from 'react'
import Search from './components/Search'
import Images from './components/Images'
import { useState, useEffect } from 'react';
import LoadingPage from './loading';

const HomePage = () => {

  const [images, setImages ] = useState([]);
  const [loading, setLoading ] = useState(true);

  useEffect(()=>{
    const fetchImages = async() => {
      const response = await fetch(`http://localhost:3000/api/images`);
      const images = await response.json();
      setImages(images.photos)
      setLoading(false)
    };
    fetchImages();
  },[])

  if(loading){
    return <LoadingPage />
  }
  return (
    <div>
      <h1>Welcome</h1>
      <Search getImageResults={(results:any)=> setImages(results)} />
      <Images images={images} />
    </div>
  )
}

export default HomePage