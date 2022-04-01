import React from 'react'

const Table = ({data}) => {
  const [page,setpage] = React.useState(1)
  const handleClick = () => {
    setpage(page + 1)
  }
  const handleMin = React.useCallback(() => {
    if(page === 1) {
      setpage(1)
      return
    }
    setpage(page - 1)
  },[page])
  return (
    <>
        <table className=" border-2 border-gray-100 table-auto p-4 w-full">
  <thead className='text-sm font-extrabold text-gray-700 px-4'>
    <tr className=''>
      <th className='px-2'>No</th>
      <th className='px-2'>Title</th>
      <th className='px-2'>Language</th>
      <th className='px-2'>Release</th>
      <th className='px-2'>Image</th>
      <th className='px-2'>Detail</th>
    </tr>
  </thead>
  <tbody className='px-4 h-20 overflow-y-scroll'>
      {data?.map((item,idx) => 
      <tr className='' key={idx}>
      <td className='text-sm text-center text-gray-600 px-2 py-1'>{idx + 1}</td>
      <td className='text-sm text-center text-gray-600 px-2 py-1'>{item?.title}</td>
      <td className='text-sm text-center text-gray-600 px-2 py-1'>{item?.original_language}</td>
      <td className='text-sm text-center text-gray-600 px-2 py-1'>1961</td>
      <td className='text-sm text-center text-gray-600 px-2 py-1'><img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} className='rounded-md mx-auto' width="50" alt="dsadasd" /></td>
      <td className='text-sm text-center text-gray-600 px-2 py-1'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268.943-9.542-7z" />
    </svg>
      </td>
    </tr>
  )}
  </tbody>
</table>
  <div className='flex items-center gap-2'>
    <div  onClick={handleMin}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
    </div>
    <div>
      <p className='text-lg font-semibold text-gray-600'>{page}</p>
    </div>
    <div onClick={handleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
    </div>
  </div>
    </>
  )
}

export default Table