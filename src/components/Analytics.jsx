import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2' >
          <img src={laptop} alt='laptop' className='w-[500px] mx-auto my-4 ' />
          <div className='flex  flex-col justify-center'>
             <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, ducimus dolor veniam saepe eveniet natus illo atque, velit suscipit odio mollitia! Animi aperiam recusandae quas exercitationem expedita debitis architecto.</p>
            <button className='bg-[#000600] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get started</button>
          </div>
            
        </div>

    </div>
  )
}

export default Analytics