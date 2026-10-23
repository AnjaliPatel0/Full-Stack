import React from 'react'

const App = () => {

//  localStorage.setItem('user','anjali')
//  const user= localStorage.getItem('user')

//  localStorage.removeItem('user')

//  console.log(user)

const user = {
  username: 'Anjali',
  age: '22',
  city:'Bhopal'
}

localStorage.setItem('user',JSON.stringify(user))
   return ( 
    <div>App</div>
  )
}


const user = JSON.parse(localStorage.getItem('user'))
console.log(user)
export default App