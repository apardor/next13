'use client';
import { useState } from 'react';
import React from 'react'
import LoadingPage from '../loading';


const Search = ({getImageResults}:any) => {
  
const [query, setQuery ] = useState('');

const handleSubmit = async (e:any) => {
  e.preventDefault();
  const apiKey = process.env.API_KEY;
  const url = `https://api.pexels.com/v1/search?query=${query}`
  const images = await fetch(url, {
      headers:{
          Authorization: `${apiKey}`,
      },
  });
  const data = await images.json(); 
  console.log(data, 'here are images');
  getImageResults(data)
}

  return (<>
    <form onSubmit={ handleSubmit }>
        <input
        className='text-black'
        type='text'
        placeholder='Search' 
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
    </form>
    </>
  )
}

export default Search



 // useEffect(()=>{
  //   const fetchImages = async() => {
  //   const apiKey = process.env.API_KEY;
  //   const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
  //     headers:{
  //         Authorization: `${apiKey}`,
  //     },
  // });
  //   const images = await response.json();
  //   setImages(images.photos)
  //   setLoading(false)
  //   };
  //   fetchImages();
  // },[])