import React from 'react'
import ProgressBar from './ProgressBar'



const TopicItem = (props : any) => {
  return (
    <div className='flex gap-2 mb-2 ml-2 w-full'>
      <img alt='image' src={props.item.image} width={100} height={100}/>

      <div >
      {props.item.name && <span>{props.item.name}</span>}

      <ProgressBar percentage = {props.item.correct_percentage} color={props.color} background={props.background}/>
      </div>
    </div>
  )
}

export default TopicItem
