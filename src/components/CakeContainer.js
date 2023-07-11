import React from 'react'
import { useSelector,useDispatch} from'react-redux'
import { buyCake } from './redux/index'

function CakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
   
  return (
    <div>
        <div>
            <h1>Number of cakes - {numOfCakes}</h1>
            <button  onClick={() => dispatch(buyCake())}>Buy Cake </button>
        </div>
    </div>
  )
}



export default  CakeContainer