import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const ViewPaste = () => {
    const params=useParams();
    const pasteId=params.id;
    const allPastes=useSelector(state=>state.pasteSlice.pastes)
    let index=allPastes.findIndex((value)=>{return value._id===pasteId})
    const paste=allPastes[index]
    
    
     
  return (
   <div>
    <div className='flex flex-column gap-4 mt-4'>
        {/* value="" rkhne se fix hojati hai */}
      <input type='text' placeholder='Title' value={paste.title} className='p-[7px] w-[70vw] rounded-xl' readOnly/>
      <NavLink to={`/?pasteId=${paste._id}`} title="Edit" className="p-1 rounded ">
      <button >{pasteId?"Edit Paste":"Create Paste"}</button>
      </NavLink>
    </div>
    <div>
    <textarea value={paste.content} placeholder='Add Contents' className='p-[7px] w-[70vw] h-[70vh] rounded-xs click:border-1'
    readOnly></textarea>
    </div>
    </div>
  )
}

export default ViewPaste
