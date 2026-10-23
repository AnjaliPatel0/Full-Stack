import axios from 'axios'
import { useState } from 'react'

// JsonPlaceholder fake api
// lorem picsum
const App = () => {

  // async function getData() {
  //         //  console.log('Data a gaya')
       
  //     const response= await fetch('https://jsonplaceholder.typicode.com/posts/1')
          
  //         console.log(response)
  //  }

  // const getData= async ()=>{
  //   const response= await fetch('https://jsonplaceholder.typicode.com/posts/1')
          
  //   const data= await response.json()
  //         console.log(data)
  //  }
  
  // const getData = async () => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(data)
  // }

  const [data, setData] = useState([])
  const getData = async () => {
      const response = await axios.get('https://picsum.photos/v2/list')
       setData(response.data)
    }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,idx){
               return <h3>Hello,{elem.author} {idx} </h3>
        })

        }
      </div>
    </div>
  )
}

export default App