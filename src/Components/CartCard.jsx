import React from 'react';
import {getData,setTotalPrice,deleteItem,addQuantity,minusQuantity,calculateTotal} from '../orderSlice';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

const CartCard = (props) => {
  const select = useSelector(state=>state.orderSlice.orderedItem)
  console.log(select)
    const dispatch = useDispatch()
    console.log(props.ele)
    const {thaliItem,price,image,quantity,totalQuantityPrice} = props.ele

    const addHandler = (index) =>{
      dispatch(addQuantity(index))
      dispatch(calculateTotal())
    }

    const minHandler = (index) =>{
      if(select[index].quantity <= 1){
        dispatch(deleteItem(index));
        dispatch(calculateTotal())
      }else{
        dispatch(minusQuantity(index))
        dispatch(calculateTotal())

      }

    }

  const deHandler = (index) =>{
    dispatch(deleteItem(index))
    dispatch(calculateTotal())
  }
  return (
   
    <tr>
    <td>1 </td>
    <td>
    <img src={image} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
    </td>
    <td>{thaliItem}</td>
    <td>
    <span><span className='btn btn-primary' onClick={()=>minHandler(props.index)}>-</span><span className='mx-2'>{quantity}</span><span className='btn btn-primary' onClick={()=>addHandler(props.index)}>+</span></span>
    </td>
    <td>
    <span>{totalQuantityPrice}</span>
    </td>

    <td>
      <button className='btn btn-warning' onClick={()=>deHandler(props.index)}>delete</button>
    </td>
</tr>

     
       


  )
}

export default CartCard