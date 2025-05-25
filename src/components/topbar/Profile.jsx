import { SquarePlus, SquareUser } from 'lucide-react'
import React from 'react'

const Profile = () => {
  return (
    <div className='flex item-center'>
      <div className='pr-2'>
        <SquareUser size={24} />
      </div>
      <SquarePlus size={24}/>
    </div>
  )
}

export default Profile
