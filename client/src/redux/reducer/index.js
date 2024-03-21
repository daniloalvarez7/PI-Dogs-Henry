import { GET_DOGS, GET_BY_NAME, GET_BY_ID } from "../actions";

//HACEMOS UNA COPIA DEL ESTADO, PARA QUE CUANDO MODIFIQUEMOS ALGO, COMO POR EJ FILTRAR ALGO, SI BORRAMOS EL ESTADOS ORIGINAL, TENGAMOS UNA MANERA DE VOLVER A ESE ESTADO ORIGINAL//

let initialState = {allDogs: [], dogsCopy: [], temperaments: []}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogsCopy: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                allDogs: action.payload
            }
        default:
            return state;
        
    }
}

export default rootReducer;