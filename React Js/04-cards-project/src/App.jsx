import React from 'react'
import {Bookmark} from 'lucide-react'


// Lucide react for icons
const App = () => {
  return (
    <div className='parent'>
       <div className='card'>
        <div>
          <div className='top'>
            <img src='https://tse2.mm.bing.net/th/id/OIP.qWOzHLmRCs0WdNB0VUL6TAHaHa?r=0&pid=Api&h=220&P=0' alt='' />
            <button>Save <Bookmark size={12}  /> </button>
          </div>

          <div className='center'>
             <h3>Amazon <span>5 days ago</span> </h3>
             <h2>Senior UI/UX Designer</h2>
             <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
             </div>
          </div>
        </div>
          <div className="bottom">
              
                <div>
                  <h3>$120/hr</h3>
                  <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
              
          </div>
       </div>

       <div className='card'>
        <div>
          <div className='top'>
            <img src='https://tse2.mm.bing.net/th/id/OIP.qWOzHLmRCs0WdNB0VUL6TAHaHa?r=0&pid=Api&h=220&P=0' alt='' />
            <button>Save <Bookmark size={12}  /> </button>
          </div>

          <div className='center'>
             <h3>Amazon <span>5 days ago</span> </h3>
             <h2>Senior UI/UX Designer</h2>
             <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
             </div>
          </div>
        </div>
          <div className="bottom">
              
                <div>
                  <h3>$120/hr</h3>
                  <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
              
          </div>
       </div>
    </div>
  )
}

export default App