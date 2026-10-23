import React , {useState} from 'react'

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

const submithandler =(e)=>{
  e.preventDefault()

  const copyTask= [...task];

  copyTask.push({title,details})
  
  setTask(copyTask)
 

  setTitle('')
  setDetails('')
}

const deleteNote = (idx)=>{
  const copyTask= [...task]

  copyTask.splice(idx,1)
  setTask(copyTask)
}
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
      <form  onSubmit={(e)=>{
        submithandler(e)
      }}
      className='flex lg:w-1/2 items-start p-10 flex-col gap-4 '>
      <h1 className='text-3xl font-bold'>Add Notes</h1>
      
      <input type='text' placeholder='Enter Notes Heading'
      className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
     
      <textarea type='text' placeholder='Write Details'
      className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
      value={details}
      onChange={(e)=>{
        setDetails(e.target.value)
      }} />
     
      <button className='bg-white active:bg-gray-200 font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Notes</button>
     
      {/* <img  className='h-60  rotate-y-180' src='https://tse2.mm.bing.net/th/id/OIP.zAPetT7ktj-xpEbohsgP0wHaE-?r=0&pid=Api&h=220&P=0' alt=''/> */}
      </form>

      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='text-3xl font-bold'>Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
           {task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black  py-9 px-4 bg-[url('https://tse3.mm.bing.net/th/id/OIP.IAMZUEePMNnqFXMyLMaYpQAAAA?r=0&pid=Api&h=220&P=0')]" >
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }}
                 className='w-full cursor-pointer active:scale-95 bg-amber-600 py-1 test-xs rounded font-bold text-white'
                >Delete</button> 
              </div>
           })}
          </div>
      </div>
    </div>
  )
}

export default App