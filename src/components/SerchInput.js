
import { useState } from 'react';

const SearchInput = ({onFormSubmit})=>{
    const [text,setText]=useState("")
    const prevent=(e)=>{
        e.preventDefault()
        onFormSubmit(text)
}
    
    

    return(
        <div className="ui segment">
            <form onSubmit={prevent} className="ui form">
                <div className="field">
               <input 
               value={text}
               type="text"
                placeholder="Search..."
                onChange={(e)=>setText(e.target.value)}/>
        </div>
        </form>
      </div>



    )

}
export default SearchInput;