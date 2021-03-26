import React from 'react'
import {useSelector} from 'react-redux'
import {  GridList,GridListTile,CircularProgress } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import Image from './Image'
import '../css/animation.css'
import {Tstate,Timg} from '../types/types'

const Images:React.FC = () => {
  const images = useSelector((reducer:Tstate) => reducer.images)
  const load = useSelector((reducer:Tstate) => reducer.isLoading)
  console.log('render')

  return (
      <>  
        {load ? <div className="circle" ><CircularProgress  /></div> : false}
        <CSSTransition in={!load} timeout={500} className="slide-up" >
          <GridList cellHeight={130}  cols={2} className="images-block" >
            {images.length 
              && images.map((item:Timg) => (
              <GridListTile  key={item.id}><Image key={item.id} {...item}/></GridListTile>
              ))
            }
          </GridList>
        </CSSTransition>
      </>
  )
}

export default Images
