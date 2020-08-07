import ADD_CART from '../constants/actionsType'
const initialState = {
    panier : [],
        
}

export default function addpanier (state = initialState, action){
    switch (action.type)
    {
        case ADD_CART :
            return {
                ...state,
                panier: [...state.panier, payload.new]
            }
        default:
            return state
    } }
