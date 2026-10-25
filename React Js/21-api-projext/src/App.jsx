import React ,{useState} from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState([])
 
  
  const getdata = async ()=>{
      const response = await axios.get('https://picsum.photos/v2/list?page=${index}&limit=10') 
      console.log(response.data)
      setData(response.data)
  }
  return (
    <div > 
      <button onClick={getdata}  
      className='bg-black text-white m-2 p-2' >Get Data</button>
    </div>
  )
}

export default App