import { ADD_CART } from "../constants/actionsType"

export function newTaskAction(addedproduct){
    return{
      type: ADD_CART ,
      payload: {
        new: addedproduct
      }
    }
  }