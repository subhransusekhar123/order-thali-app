import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { getData , addQuantity,minusQuantity,calculateTotal} from "../orderSlice";

const Card = (props) => {
    const dispatch = useDispatch()
   const{thaliItem,price,image} = props.ele;
   const [quantity,setQuantity] = useState(0);//state for quantity
   const addHandler = () =>{
       setQuantity(quantity + 1)
       
   }

   const subHandler = () =>{
       if(quantity < 1){
           setQuantity(0)
          
       }else{
           setQuantity(quantity - 1)
          
       }
  }

  const orderHandler = (x) =>{
      dispatch(getData({...x,quantity}))
      dispatch(calculateTotal())
  }
    
  return (
    <>
      <div className="col-4 my-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{thaliItem}</h5>
            <h2 className="card-text">
              {price}rs
            </h2>
            <div className="d-flex justify-content-between">
            <span><span className="btn btn-primary" onClick={subHandler}>-</span><span className="mx-2">{quantity}</span><span className="btn btn-primary" onClick={addHandler}>+</span></span>

            <a href="#" className="btn btn-primary" onClick={()=>orderHandler(props.ele)}>
              order
            </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
