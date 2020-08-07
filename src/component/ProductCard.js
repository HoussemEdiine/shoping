import React,{useState} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import { Button, Modal } from "react-bootstrap";
//import {useDispatch, useSelector} from "react-redux"
//import {addpanier} from "../js/actions/actionsPanier"  




const ProductCard = (props,{match}) => {

    const [prod, setProd] = useState({Name:"",Category:"",Prix:"",Description:""})
    const [show, setShow] = useState(false);
    const handleShow = () => {setShow(true);
    }
 
    const handleClose = () => setShow(false);
   
    
     /*  const dispatch = useDispatch() ;
    // produit a ajouter au panier 
    const produits =useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(getproduits());})
    const ajoutpanier = () => {

    } */


    const produitAAfficher = (id)=>{
        const result = props.produits.filter(e => e._id == id)
          
          return result
         
    }
    return (
        <BrowserRouter>
        
        
        <div className="mainContainer"  >
            {props.produits.map((e )=>(
               <div className="text-center"key={e._id}>
                {/* <Link  to={`/produit/${e._id}` }>   */}
              
                  {/*   {console.log(e._id)}
                    {console.log("fares")} */}
             <div key={e._id}  className="card border-primary mb-2" style={{ width: '18rem',boxShadow:'3px 3px 5px  ',borderRadius:'10px' }}>
                <div className={'card-body'}>
                  <h5 class="card-title" style={{backgroundColor:'bisque',border:'1px solid black',borderRadius:'10px'}}>{e.Category}</h5>
                <p className="card-text"> Modéle: <b>{e.Name}</b></p>
                <p className="card-text">Prix: <b>{e.Prix}$</b></p>
                <p className="card-text">{e.Description}</p>
                <img className="imageproduit"alt="img" src={e.Photo}></img>
                
                <Link  to={`/produit/${e._id}` }>  
                <Button className="buttonDetails" variant="success"  onClick={handleShow} >
          Product Details
        </Button>
         
        </Link>
        </div>
        </div>
        
             </div> )  )}
        </div>
        
        <Route path={`/produit/:_id`} render= {({match}) =>( 
        <div> 
            {/* <h3 className="text-center"> 

            {setProd(produitAAfficher(match.params._id)[0])}
         
            {console.log(prod)}
         <p>{<ProductDetails prod={prod}></ProductDetails>}</p> 
           <p>{  match.params._id}  </p>
        <p>{props.prodit}</p>
            </h3> */}
            { setProd(produitAAfficher(match.params._id)[0])}
            {console.log(prod)}
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <table>

           <tr><td> Name :</td> <td>{prod.Name}</td></tr>
           <tr><td> Category :</td> <td>{prod.Category}</td></tr>
           <tr><td> Preis :</td> <td>{prod.Prix}</td></tr>
           <tr><td> Description :</td> <td>{prod.Description}</td></tr>
           <tr><img width="300px" height="300px" src={prod.Photo}></img></tr>
        </table>

            
            
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Ajouter au Panier
            </Button>
          </Modal.Footer>
        </Modal>
      
           
        </div> )}>
        </Route>
        
        </BrowserRouter>
        
    )
}

export default ProductCard
