import { useEffect,useRef, useState } from "react"

const CardImage=({img})=>{

    const{description,urls}=img
    const imgRef=useRef()
    const[span,setSpan]=useState(2)
 useEffect(() => {
   imgRef.current.addEventListener('load',()=>{
    const height =imgRef.current.clientHeight
    //resmin yüksekliğine oranla span değeri oluştur.
    setSpan(Math.ceil(height/20))
   })
 
  
 }, [])
 
    
    return(
        
<img style={{gridRowEnd:`span ${span}`}} ref={imgRef} alt={description} src={urls.regular}/>
        
    ) 
        
    
}
export default CardImage;