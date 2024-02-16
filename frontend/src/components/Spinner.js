import React from 'react'
import loading from '../../src/components/assets/Infinity-1s-200px.gif'
import './CSS/Success.css'

const Spinner = () => {
  return (
    <>
      <div className='text-center spinner sm-mx-auto' style={{position:'absolute', top:"30%", right:'45%'}}>
        <img className='imgSpinner' src={loading} alt="spinner" srcset=""   style={{width:"71%"}}/>
      </div>
    </>
  )
}

export default Spinner
