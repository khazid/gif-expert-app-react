import React from 'react'
import './App.css'
import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ])
  
  const onAddCategory = (newCategory ) =>{

    //si la categoria ya existe no la guarda
    if ( categories.includes(newCategory) ) return;
      
    setCategories( cat =>[...cat, newCategory] )
    //categories.push(newCategory) no funciona para react 

  }

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory = { onAddCategory } //forma limpia de establecer la comuniacion entre componentes
      />

        {
            categories.map( ( category ) => ( 
               <GifGrid 
                  key={ category } 
                  category={ category }
                />
             ))
        }

    </>
  )
}
