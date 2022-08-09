import { useState } from "react";

const ShowImage=({image})=>{

    

    return(
        <div>
            {image.map(({id,urls})=>{
            return <div key={id}>
            <img  src={urls.regular}/>
            </div>})}
            {/* Found:{image.length}images */}
        </div>
    )
}
export default ShowImage;