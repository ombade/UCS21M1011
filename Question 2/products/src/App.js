import React from 'react'
import NavBar from './Componets/NavBar'
import Product from './Componets/Product'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Shop from './Componets/Shop';

export default function App() {
return (
    <div>
       <div>
      
        <Router>
          <NavBar/>
        <Routes>
            <Route exact  path='/' element={<Product/>}/>
            <Route exact  path='/Shop' element={<Shop/>}/>

        </Routes> 
        </Router>
       </div>
    </div>
  )
 }




