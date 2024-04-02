import React from 'react'
import i1 from '../assets/avatar_one.png'
function Avatar() {
  return (
    <div>
        <img className='rounded-full scale-75 hover:border-8 border-[#e55db2] hover:transition ease-in-out delay-150 duration-300'  src={i1} alt=''/>
    </div>
  )
}

export default Avatar
