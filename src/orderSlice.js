import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderedItem:[],
    totalPrice : 0
}

export const orderSlice = createSlice({
    name:'orderedSlice',
    initialState,
    reducers:{
        getData:(state,action)=>{
            action.payload.totalQuantityPrice = action.payload.price * action.payload.quantity
            state.orderedItem.push(action.payload)
            alert('item added')
            console.log(action.payload)
        },
        setTotalPrice : (state) =>{
            let sum = 0;

            (function(){
                for(let i = 0 ; i < state.orderedItem;i++){
                    let eachItem = state.orderedItem[i].price * state.orderedItem[i].quantity
                    sum = sum + eachItem;
                    console.log(sum)
                }

            })()
            
        },
//calculate price for total items present in the ordered item.
        calculateTotal:(state)=>{
           let price = 0
            for(let i = 0 ; i < state.orderedItem.length; i++){
                price = price + state.orderedItem[i].totalQuantityPrice
            }
            state.totalPrice = price;
            console.log(state.totalPrice)
            
        },

        deleteItem:(state,action)=>{
            state.orderedItem.splice(action.payload,1)
        },
        addQuantity:(state,action)=>{
            state.orderedItem[action.payload].quantity = state.orderedItem[action.payload].quantity + 1;
            state.orderedItem[action.payload].totalQuantityPrice = state.orderedItem[action.payload].price * state.orderedItem[action.payload].quantity
        },
        minusQuantity:(state,action)=>{
            state.orderedItem[action.payload].quantity = state.orderedItem[action.payload].quantity - 1;
            state.orderedItem[action.payload].totalQuantityPrice = state.orderedItem[action.payload].price * state.orderedItem[action.payload].quantity
           
        }

        

        
    }
})



export const {getData,setTotalPrice,calculateTotal,deleteItem,addQuantity,minusQuantity} = orderSlice.actions

export default orderSlice.reducer