import Image from 'next/image';
import React from 'react'

const Images = ({images}:any) => {

  console.log();
  
  return (
    <div className='grid grid-cols-3'>
      {images?.map((el:any)=>(
        <div key= {el.id}
        className="relative w-full aspect-video"
        >
          <h1>{el.photographer}</h1>
          <Image src={el.src.large} alt={el.alt} fill className="object-cover"/>
        </div>
      ))}
    </div>
  )
}

export default Images