import React,{useState} from 'react'


import {BrowserRouter,Route,Link } from 'react-router-dom'
import Category from "./Category"
import Home from "./Home"
import AddProduct from "./AddProduct"
import Panier from "./Panier"
import { addProduit } from '../js/actions/actionsProduit'

 const Header = (props) => {
   /* const dispatch = useDispatch() ;
    //3 59:18
    const produits =useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(getproduits());
   
  }, [])  */


   
   let porduits=props.produits
    return (
        <BrowserRouter>
        <div>
        <ul className="navbar nav justify-content-around  navHeader">
    <li ><Link to="/"><p className="text-light ">Home</p></Link></li>
    <li><Link to="/Category"><p className='text-light'>Category</p></Link></li>
    <li><Link to="/AddProduct"><p className='text-light'>Ajouter un Produit</p></Link></li>
    <li><Link to="/Panier"><p className='text-light'>Panier</p></Link></li>

   {/*  <li><Link to="/Product">Product</Link></li>
    <li><Link to="/AdminArena">Admin-Area</Link></li> */}

    </ul>
           {/*  <nav className="navbar navbar-dark bg-dark">
            <Link to="/Category">Category{ <p style={{ color: 'white' }}>Category</p> } </Link>
</nav> */}
       {<Route path="/" exact /* component={Home} */  render={(porduits) => <Home   {...props}  />}></Route>   }
    <Route path="/Category"  component={Category}></Route>
    <Route path="/AddProduct"   render={() => (
          <AddProduct
           // handelChange={handelChange}
           // action={isEdit ? editUser : add}
            produit={props.produit}
           // isEdit={isEdit}
          />
        )}
      />
      <Route path="/Panier" component={Panier}></Route>




    
        </div>
        </BrowserRouter>
    )
}

export default Header
