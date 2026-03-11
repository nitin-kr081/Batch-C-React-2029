import React, { useState } from 'react'

function Pagination({decrementPage , incrementPage , pageNumber}) {

 



  return (
    <div className='bg-gray-400 h-15 flex justify-center items-center gap-3'>
        <div onClick={decrementPage}><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={incrementPage}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination