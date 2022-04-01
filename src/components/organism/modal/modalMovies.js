import React from 'react'

const ModalMovies = (props) => {
  
  const handleClick = props.handleClose(true)
  console.log(props.item);
  return (
    props.isActive && (
    <>
      <div className='z-20 top-0 left-0 p-20 right-0 bottom-0 absolute bg-gray-600'>
        <div className='w-full flex justify-between z-40'>
        <p>Detail Movies</p>
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
        </div>
        <div>
    
        </div>
      </div>
    </>
    )
  )
}

export default ModalMovies