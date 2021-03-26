import React from 'react'
import { GridListTileBar,Dialog,Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import '../css/image.css'
import {Timg} from '../types/types'

const Image = ({largeImageURL,tags,user}:Timg) => {
  const [open,setOpen] = React.useState<boolean>(false)
  
  const handleOpen = ():void => {
    setOpen(true);
  };

  const handleClose = ():void => {
    setOpen(false);
  };
  return (
    <>
      <div onClick={handleOpen} className="img-item" >
        <img src={largeImageURL} style={{width: '100%'}} alt=""/>
        <GridListTileBar
          title={tags}
          subtitle={<span>by: {user}</span>}
        />
        
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <img src={largeImageURL} alt=""  />
        <Button 
          onClick={handleClose}
          id="img-close"
        ><CancelIcon/></Button>
      </Dialog>
      
      
    </>
  )
}

export default Image
