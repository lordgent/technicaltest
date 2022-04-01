import React from 'react'
import Layout from '../../components/layouts'



const Dashboard = () => {

  return (
    <Layout>
      <p className='text-[25px] font-semibold text-gray-800'>Dashboard</p>
      <div className='grid grid-cols-3 justify-between w-full gap-2'>
        <div className='bg-red-500 w-full rounded-lg p-2 h-28 cursor-pointer'>
          <p className='text-white font-semibold'>Movies</p>
        </div>
        <div className='bg-yellow-500 w-full rounded-lg p-2 h-28 cursor-pointer'>
          <p className='text-white font-semibold'>Genre</p>
        </div>
        <div className='bg-blue-500 w-full rounded-lg p-2 h-28 cursor-pointer'>3</div>
      </div>
    
    </Layout>
  )
}

export default Dashboard
