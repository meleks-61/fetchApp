import { useState } from "react";
import CardImage from "./CardImage";
import './CardImage.css'

const ShowImage=({image})=>{

    

    return(
        <div className="image-container">
            {image.map((img)=>{
            return <CardImage key={img.id} img={img}/>    })}
            {/* Found:{image.length}images */}
        </div>
    )
}
export default ShowImage;