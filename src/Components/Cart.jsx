import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';



const Cart = () => {
   
    const orderSliceSelect = useSelector(state=> state.orderSlice.orderedItem)
    const totalPrice = useSelector(state =>state.orderSlice.totalPrice)
   
  return (
      <>
      <div className="container">
          

       <table className='table table-primary '>
           <thead>
               <tr>
                   <th>index no</th>
                   <th>image</th>
                   <th>name</th>
                   <th>quantity</th>
                   <th>total</th>
                   <th></th>
               </tr>
           </thead>

           <tbody>
           {
              orderSliceSelect.map((ele,index) => {
                  return (
                      <CartCard ele = {ele} index={index}/>
                  )
              })
          }
           </tbody>
          <tfoot>
              <tr>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{totalPrice}</td>
                  <td></td>
              </tr>
          </tfoot>
       </table>
 
          
      </div>
      <div className="container position-relative">
          <button className='btn btn-primary position-absolute mx-3' style={{right:0}}>checkout <span>&#8594;</span></button>

      </div>
      </>

  )
}



export default Cart