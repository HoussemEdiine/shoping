import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Test from "./component/Test"
//import ProductCard from './component/ProductCard';
import useState from "react"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react" 
import {getproduits ,addProduit} from "./js/actions/actionsProduit"  
import ProductCard from './component/ProductCard';
import Header from './component/Header';
import Home from './component/Home'




function App() {
 
   
  /*
const add = () => {
dispatch(addProduit(produit));
reset();
}; */
 
   const dispatch = useDispatch() ;
    //3 59:18
  /*   const produits =useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(getproduits());
   
  }, [])  */
 const produits = [{"_id": {
  "$oid": "5f064aaf5ad6823cef84c650"
},
"Name": "Toshiba",
"Category": "pc portable",
"Prix": "1000",
"Description": "Description1",
"Photo": "https://www.cdiscount.com/pdt2/1/2/0/1/300x300/sfith14a64w120/rw/thomson-pc-portable-disque-dur-externe-120go-t.jpg"
},{
"_id": {
  "$oid": "5f064aaf5ad6823cef84c651"
},
"Name": "HP",
"Category": "pc portable",
"Prix": "10",
"Description": "Description1",
"Photo": "https://www.tunisianet.com.tn/109331-large/pc-portable-hp-15-da0001nk-i3-7e-gen-24-go-blanc-sim-orange-offerte-30-go.jpg"
}]
  return (
    
    
    
    <div >
       
     <Header  produits={produits}  /* produit={produit} */></Header>
     
     {/* {<Home produits={produits} ></Home> } */}
      
 
    </div>
    
  );
}

export default App;
