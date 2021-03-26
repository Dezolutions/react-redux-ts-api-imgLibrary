import React from 'react'
import {Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';
import {useDispatch} from 'react-redux'
import {onInputChange,setImages,setLoading} from '../redux/action'
import {DebounceInput} from 'react-debounce-input';
import '../css/search.css'
const Search:React.FC = () => {
  const dispatch = useDispatch()
  const [value,setValue] = React.useState<string>('')
  const [amount,setAmount] = React.useState<number>(7)
  const [open, setOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    if(value.length){
      dispatch(onInputChange(value,amount))
      dispatch(setLoading(true))   
    }
  },[value,amount])

  const onClear = ():void => {
    dispatch(setImages([]))
  };

  const onFind = ():void => {
    if(value.length){
      dispatch(onInputChange(value,amount)) 
      dispatch(setLoading(true))   
    }
  };
  const onSetValue = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setValue(e.target.value); 
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>):void => {
    setAmount(event.target.value as number);
  };

  const handleClose = ():void => {
    setOpen(false);
  };

  const handleOpen = ():void => {
    setOpen(true);
  };
  
  return (
    <div className="search-block" >
      <DebounceInput
          className="search-input"
          minLength={2}
          value={value}
          debounceTimeout={450}
          onChange={onSetValue}
          placeholder="Введите название" />
        <FormControl   >
          <InputLabel id="demo-controlled-open-select-label">Amount</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={amount}
            onChange={handleChange}
          >
            <MenuItem value={7} >7</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </FormControl>
      
      <Button onClick={onFind} size="small" variant="contained" color="primary" id="search-btn" >Find</Button>
      <Button onClick={onClear} size="small" variant="contained"  id="search-btn" >Clear</Button>
    </div>
  )
}

export default Search
