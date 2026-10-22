import React from 'react'

const App = () => {

  function inputChangeing(val){
    console.log(val);
  }
  return (
    <div>
        <input  onChange={function(elem){
          inputChangeing(elem.target.value)
        } } type='text' placeholder='Enter name'/>
    </div>
  )
}

export default App