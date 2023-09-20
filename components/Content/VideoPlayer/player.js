import React from 'react'
import ReactPlayer from 'react-player'
function Player() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-2 p-16 md:p-10 lg:p-6 '>
      

      <ReactPlayer url='https://www.youtube.com/watch?v=Ih-IVe5AUdA&ab_channel=News24' height={150} width={220}/>
      <ReactPlayer url='https://www.youtube.com/watch?v=hu48zSWWKRU&ab_channel=AajTak' height={150} width={220}/>
      <ReactPlayer url='https://www.youtube.com/watch?v=Ih-IVe5AUdA&ab_channel=News24' height={150} width={220}/>
      <ReactPlayer url='https://www.youtube.com/watch?v=hu48zSWWKRU&ab_channel=AajTak' height={150} width={220}/>
      <ReactPlayer url='https://www.youtube.com/watch?v=ecGQsHr-yyQ&ab_channel=NDTVIndia' height={150} width={220}/>
      <ReactPlayer url='https://www.youtube.com/watch?v=EJg5oSX_tw0&ab_channel=WION' height={150} width={220}/>
      <ReactPlayer url='https://www.youtube.com/watch?v=ecGQsHr-yyQ&ab_channel=NDTVIndia' height={150} width={220}/>
      <ReactPlayer url='https://www.youtube.com/watch?v=EJg5oSX_tw0&ab_channel=WION' height={150} width={220}/>
     
       
    </div>
  )
}

export default Player
