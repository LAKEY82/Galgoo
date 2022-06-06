import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import pic from "../Images/name.jpg"
import '../Pages/home.css'
import '../Pages/search.css'
import search  from './search';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
function home() {
  return (
    <div className='home'>
    <div className='home_header'>

            <div className='home_headerLeft'>
               <p></p>
               <p></p>
            </div>

            <div className='home_headerRight'>
              <p>Gmail</p>
              <p>Images</p>
              <AppsIcon/>
              <Avatar/>
            </div>

    </div>
    
    <div className='home_body'>
         <img className='image' src={pic} />
         
          <div className='home_inputcontainer'>
          <div>   
             <form className='search'>
                 <div className='search_input'>
                 <SearchIcon/> 
                   <input/>
                   <MicIcon/> 
                 </div>

                 <div className='search_buttons'>
                   <button type="submit" variant="outlined">Galgoo Search</button>

                   <button  variant="outlined">I'm Feeling Lucky</button>
                 </div>
             </form>
          </div> 
          </div>
        </div>
    </div>
  )
}

export default home