import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

// Remix icon is used for icon
const Page1Content = (props) => {
  
  return (
    <div className='pb-16 pt-6 flex gap-10 h-[90vh] px-18 '>
         <LeftContent/>
         <RightContent users= {props.users} />
    </div>
  )
}

export default Page1Content