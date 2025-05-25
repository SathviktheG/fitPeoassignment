import { SettingsIcon } from 'lucide-react'
import React from 'react'

const Settings = () => {
  return (
    <div>
        <div className='flex items-center w-[95%] mt-6 hover:text-[#54525f] hover:font-medium'>
          <SettingsIcon />
        <span className='pl-4 '>Settings</span>
      </div>
    </div>
  )
}

export default Settings
