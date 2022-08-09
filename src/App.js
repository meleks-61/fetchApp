
import './App.css';
import SearchInput from './components/SerchInput';
import { useState } from 'react';
import axios from 'axios';
import ShowImage from './components/ShowImage';

function App() {

  const[image,setImage] =useState([])

 const onFormSubmit = async (e)=>{
  // console.log(e)
  //get ('url',{params:{query:searchterm},headers:{Authorization:'Client-ID apikey'}})
   const response= await axios.get('https://api.unsplash.com/search/photos',{
    params:{query:e},
    headers:{Authorization:"Client-ID uiDLbKolc7o2fUItdwK12kVNrh-4WNQPCMsokPhuo1A"}
  })
// console.log(response.data.results)
setImage(response.data.results)

 }


  
 



  return (
    <div className="App">
      <SearchInput  onFormSubmit={onFormSubmit} />
      <ShowImage image={image}/>
     
    </div>
  );
}

export default App;
