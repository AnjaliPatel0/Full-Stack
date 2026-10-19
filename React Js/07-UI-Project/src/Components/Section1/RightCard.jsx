import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://static.vecteezy.com/system/resources/previews/045/740/363/non_2x/a-professional-woman-in-a-grey-blazer-focuses-on-her-work-while-using-a-desktop-computer-at-her-office-desk-png.png" alt="" />
        <RightCardContent/>
    </div>
  )
}

export default RightCard