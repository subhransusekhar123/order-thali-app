import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Items = () => {
    
    const select = useSelector(state =>state.thaliSlice.thaliItems)
   
  
    
    return (
      <div className='container'>
          <div className="row">
              {
                  select.map(ele=>{
                      
                      return (
                        <Card ele={ele}/>
                      )
                  })
              }
              
          </div>
      </div>
    )
}

export default Items