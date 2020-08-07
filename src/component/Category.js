
import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {getproduits} from "../js/actions/actionsProduit" 
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react" 
import ProductCard from "./ProductCard"


const Category = ({match}) => {
  const dispatch = useDispatch() ;
    //3 59:18
    const produits =useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(getproduits());
   
  }, []) 
  const affichecategory = (cat)=>{
    const result = produits.filter(e => e.Category == cat);
    return result
  }

    return (
     
        <div className="mt-3">
          {console.log(match.url)}
            <h2 className="text-center"></h2>
           < BrowserRouter>
              <ul className=" mt-4 nav navbar justify-content-around bg-light ">
    <li><Link to={`${match.url}/pc portable`}>pc portable</Link></li>
    <li><Link to={`${match.url}/cat2`}>cat2</Link></li>
    <li><Link to={`${match.url}/cat3`}>cat3</Link></li>

  </ul>
  {console.log(produits)}
  
    <Route path={`${match.path}/:name`} render= {({match}) =>( <div>  <div><ProductCard produits={affichecategory(match.params.name)}></ProductCard></div></div>)}/>
  </BrowserRouter>
  </div>
        
    )
}

export default Category
