import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addPaste,updatePaste,resetPaste,deletePaste} from '../redux/pasteSlice.js'
import PasteCard from './PasteCard.jsx'
const Pastes = () => {
  const allPastes=useSelector(state=>state.pasteSlice.pastes)
  const dispatch=useDispatch();
  const [searchField,setSearchField]=useState('');
  const filteredData=allPastes.filter((value)=>{
    return value.title.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col gap-4'>
        <input type='text' value={searchField} placeholder='Search Paste'
         onChange={(e)=>{setSearchField(e.target.value)}} className='mt-4 p-[7px] w-[70vw] rounded-m'/>
            {
              filteredData.length>0 &&
              (
                filteredData.map((value)=>{return (<PasteCard key={value._id} paste={value}/>)})
              )
            }          
          </div>
      <div>
      <button onClick={()=>{dispatch(resetPaste())}}>Clear Pastes</button>
      </div>
    </div>
    
  )
}

export default Pastes
