import React, {useState, useEffect} from 'react';

const WindowResizer = () => {
   const [size, setSize] = useState(window.innerWidth)
   const checkSize = () => {
       setSize(window.innerWidth)
   }

   useEffect(() => {
       window.addEventListener('resize', checkSize)
       return () => {
          window.removeEventListener('resizer',checkSize)
       }
   }, []) 


   return (
       <>
         
           <h1 style={{ color:'#fff' }}>Window Size</h1>
           <h2 style={{ color:'#fff' }}>{size} px</h2>
       </>
   )
}

export default WindowResizer;