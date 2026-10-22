import React, {useState} from 'react'
import { useSyncExternalStore } from 'react'


// Batch manage
// const App = () => {
//   const [num, setnum] = useState(10)

//   const btnCLicked =()=>{
//      setnum(prev => (prev+1))
//      setnum(prev => (prev+1))
//      setnum(prev => (prev+1))
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnCLicked} >Click</button>
//     </div>
//   )
// }



// const App = () => {
   
//   const [num, setnum] = useState({user: 'Anjali', age: 20})

//   const btnClicked = ()=> {
//     const newNum = {...num};
//     newNum.user= 'Angel'
//     newNum.age='23'
//     setnum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num.user}, {num.age} </h1>
//       <button onClick={btnClicked} >Click</button>
//     </div>
//   )
// }




const App = () => {

 const [num, setnum] = useState(0)
 
  function increaseNum(){
    setnum(num+1)
  }
   function decreaseNum(){
    setnum(num-1)
  }
   function jump5Num(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum} >increase</button>
      <button onClick={decreaseNum} >decrease</button>
      <button onClick={jump5Num} >increase by 5</button>

    </div>
  )
}





// const App = () => {
//   const [num, setnum] = useState(10)
//   const [username, setusername] = useState('Anjali')
//    function changeNum(){
//      setnum(30)
//      setusername('Angel')
//    }
//   return (
//     <div>
//       <h1>Value of num is {num} <br/> Value of use is {username}  </h1>
//       <button onClick={changeNum} >Click</button>
//     </div>
//   )
// }

export default App