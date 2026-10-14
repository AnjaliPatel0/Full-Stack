import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user='Anjali Patel' age={21} img="https://tse4.mm.bing.net/th/id/OIP.6VGr7ok_NQzzDcNp9yJ5EgHaE7?r=0&pid=Api&h=220&P=0"/>
      <Card user='Anni' age={22} img="https://tse4.mm.bing.net/th/id/OIP.lIm1jqhVFv9DS9ulvp2W_AHaER?r=0&pid=Api&h=220&P=0" />
    </div>
  )
}

export default App