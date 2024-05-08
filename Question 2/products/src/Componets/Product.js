

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Product() {
    const [col,setCol]=useState([])
    const [records,setrecords]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3030/Products")
      .then(res=>{
          // console.log(Object.keys(res.data[0]))
          setCol(Object.keys(res.data[0]))
          setrecords(res.data)
      })
    })
return (
    <div className='container mt-5'>
      <table className='table'>
        <thead>
          <tr>
           {col.map((c,i)=>(
             <th key={i}>{c}</th>
           ))}
           </tr>
        </thead>
        <tbody>                  
          {
            records.map((d,i)=>(
               <tr key={i}>
                 <td>{d.productname}</td>
                 <td>{d.price}</td>
                 <td>{d.rating}</td>
                 <td>{d.discount}</td>
                 <td>{d.availability}</td>
               </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}





