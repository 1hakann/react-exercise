import React, {useState} from 'react';

const UseStateBasics = () => {
   const [person, setPerson] = useState({
       name: 'hakan',
       age: 29,
       message: 'I am developer' 
   });  

   // ------------------->
   //alternative
   // const [name,setName] = useState('peter')
   // const [age,setAge] = useState(24)
   // const [message,setMessage] = useState('random message')
   // <-------------------

   const changeMessage = () => {
       setPerson({...person, message:'Hello World'})
       //setMessage('Hello World)
   }

   return (
       <>
           <h2>{person.name}</h2>
           <h2>{person.age}</h2>
           <h2>{person.message}</h2>
           <button className="btn_yellow" onClick={changeMessage}>Change Message</button>
       </>
   )
}

export default UseStateBasics;

// 1-import react,useState
// 2- const BasicUseState = () => {} and export
// 3- person, setPerson define for useState as a object
// 4- return <> enter inside
// 5- give button onClick changeMessage
// 6- define method and add setPerson