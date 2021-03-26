import {Tstate} from '../types/types'
const initialState : Tstate = {
  images: [],
  isLoading: false
}

const reducer = (state = initialState,action:any) => {
  switch (action.type) {
    case 'SET_IMAGES': 
      return {
        ...state,
        images: action.payload
      }
    case 'LOADING': 
      return {
        ...state,
        isLoading: action.payload
      }
  
    default:
      return state;
  }
}

export default reducer;