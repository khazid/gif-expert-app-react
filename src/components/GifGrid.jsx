import React from 'react'
import { GifItem } from '../components'
import { useFetchGifs } from '../hooks/useFetchGifs'

import '../App.css'

export const GifGrid = ( { category } ) => {

  // Uso de Custom hook
const { images, isLoading } = useFetchGifs( category )

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
          
        }
        
        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GifItem 
                key={image.id}
                {...image}
              />
            ) )
          } 
        </div>
        
    
    </>
  )
}
