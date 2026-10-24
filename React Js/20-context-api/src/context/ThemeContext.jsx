// import React, { createContext } from 'react'
// // Create karo context
// // provide karo data
// // use karo data

//  export const ThemeDataContext= createContext()

// const ThemeContext = (props) => {
//   return (
//     <div> 
//         <ThemeDataContext.Provider value='Anjali' >
//         {props.children}
//         </ThemeDataContext.Provider>
//     </div>
//   )
// }

// export default ThemeContext

import { useState } from "react"
import React , {createContext}  from 'react'

export const ThemeDataContext = createContext()
const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light')
  return (
    <div>
        <ThemeDataContext.Provider value = {[theme,setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext