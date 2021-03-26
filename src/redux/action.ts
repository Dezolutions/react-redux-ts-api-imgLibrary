import axios from 'axios'

export const onInputChange = (value:string,amount:number) => (dispatch:any) => {
  const apiKey = '14514672-c2dd62e4bfea0db355ae654da';
  axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${value}&image_type=photo&per_page=${amount}&safesearch=true`)
    .then(({data}) =>  dispatch(setImages(data.hits)))
    .then(() => setTimeout(() => dispatch(setLoading(false)),300))
}

export const setLoading = (isLoading:boolean) => ({
  type: 'LOADING',
  payload: isLoading
})
export const setImages = (items:any[]) => ({
  type: 'SET_IMAGES',
  payload: items
})