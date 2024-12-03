
import React, { useEffect } from 'react'
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const UserItem = (props: any) => {



  return (
     <div className='flex gap-2 mb-2 ml-2 w-full'>
          <img alt='image' src={props.User.image} width={100} height={100}/>
    <div >
          {props.User.name && <span>{props.User.name}</span>}
    <div className='flex'>
   
    {props.User.points && props.User.accuracy_percentage && <span>{props.User.points} points - {props.User.accuracy_percentage}% Correct</span>}
    <div className="flex items-center ml-6">
            {/* {props.userData?.map((item: any, index: number) => ( */}
            
             <span>{props.rank}</span>  

            {props.User.previous_accuracy_percentage > props.User.accuracy_percentage ? (
              <span>
                <FaCaretUp color="green" />
              </span>
            ) : (
              <span>
                <FaCaretDown color="red" />
              </span>
            )}
            
         </div> 
    </div>
          </div>
        </div>
  )
}

export default UserItem
