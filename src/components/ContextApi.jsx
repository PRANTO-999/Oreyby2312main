import React, { useEffect, useState,createContext } from 'react'
import axios from 'axios';

let ApiData = createContext();


const ContextApi = ({children}) => {
    let [info, setInfo] = useState([])

    let dataItem = () => {
      axios.get("https://dummyjson.com/products").then((response) => {
        setInfo(response.data.products);        
      })
    } 
  
    useEffect(()=>{
      dataItem()
    },[])

  return (
    <ApiData.Provider value={info}>
        {children}
    </ApiData.Provider>
  )
}

export {ContextApi, ApiData}