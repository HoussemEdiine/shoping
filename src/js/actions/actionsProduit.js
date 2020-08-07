import { GET_PRODUCTS } from "../constants/actionsType"
import axios from "axios" ;




export const getproduits = ()=>(dispatch)=> {
    axios
    .get ("/api/produits")
    .then(res=> dispatch({type: GET_PRODUCTS, payload : res.data}))
    .catch((err)=> console.log(err))


}

export const addProduit =(newProduit)=>(dispatch)=>{
    axios
        .post("/api/produits", newProduit)
        .then ((res)=>dispatch(getproduits()))
        .catch ((err)=>console.log(err))
}