import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
const App = () => {
  
const users=[
 {
  img: 'https://tse4.mm.bing.net/th/id/OIP.9oRY9UQHZWNiNeT4iy5KggHaLG?r=0&pid=Api&h=220&P=0',
  intro:'',
  color:'black',
  tag:'Satisfied'
 },
 {
  img: 'https://tse2.mm.bing.net/th/id/OIP.c6By9cqpS5UzfNklhsjg5AHaE8?r=0&pid=Api&h=220&P=0',
  intro:'',
  color:'green',
  tag:'Underserved'
 },
 {
  img: 'https://tse2.mm.bing.net/th/id/OIP.sKu5SqBnN8gHyOhsZyCznAHaHa?r=0&pid=Api&h=220&P=0',
  intro:'',
  color:'royalblue',
  tag:'Underbanked'
 },
 {
  img: 'https://tse1.mm.bing.net/th/id/OIP.mkrbxIpB1HqgsN05pTmKeAHaHe?r=0&pid=Api&h=220&P=0',
  intro: '',
  color:'orange',
  tag:'UnderGroup'
 }
  
]
  


  return (
    <div >

      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App