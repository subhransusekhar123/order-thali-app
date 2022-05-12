import { createSlice } from "@reduxjs/toolkit";


const initialState={
   thaliItems:[
    {
        thaliItem:'chapati',
        price:10,
        image:'../itemsimage/Chapati-recipe.jpg'
    },
    {
        thaliItem:'paneerDish',
        price:150,
        image:'../itemsimage/palak-paneer.jpg'
    },
    {
        thaliItem:'pickle',
        price:30,
        image:'../itemsimage/pickle.jpg'
    },
    {
        thaliItem:'curd',
        price:50,
        image:'../itemsimage/dahi.jpg'
    },
    {
        thaliItem:'sweet',
        price:40,
        image:'../itemsimage/sweet.jpg'
    },
    {
        thaliItem:'dal',
        price:80,
        image:'../itemsimage/dal.jpg'
    },
    ]  
}

export const slice = createSlice({
    name:'thali',
    initialState,
    reducers:{

    }
})

export default slice.reducer;