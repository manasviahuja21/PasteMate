import React, { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {addPaste,updatePaste,resetPaste,deletePaste} from '../redux/pasteSlice.js'
import { toast } from 'react-toastify';
const Home = () => {
    const dispatch=useDispatch();
    const [title,setTitle]=useState('');
    const[content,setContent]=useState('');
    // set search params
    const [searchParams,setSearchParams]=useSearchParams();
    const pasteId=searchParams.get("pasteId");
    const allPastes=useSelector(state=>state.pasteSlice.pastes)
    useEffect(() => {
      if(pasteId)
      {let index=allPastes.findIndex((value)=>{return value._id===pasteId})
      if(index!=-1)
      {
        setTitle(allPastes[index].title);
        setContent(allPastes[index].content);
      }
    }
      else
      {
        setTitle('');
        setContent('');
        
  

      }
    
      
    }, [pasteId])
    
    function handleChange(e)
    {
        setTitle(e.target.value);
    }
    function createPaste()
    {
        const paste={
            title,
            _id:pasteId?pasteId:Date.now().toString(25),
            content,
        }
        if(pasteId)
        {
            if(title.length>0)
            dispatch(updatePaste(paste));
            else
            toast.error("Cannot create paste without Title")
        }
        else
        {   if(title.length>0)
            dispatch(addPaste(paste));
            else
            toast.error("Cannot create paste without Title")
        }
        setContent('');
        setTitle('');
        setSearchParams({});
    }
  return (
    <div>
      {!pasteId && (
        <div className="text-center mt-8 text-gray-600">
          <h2 className="text-2xl font-bold text-blue-600">Welcome to PasteMate 📝</h2>
          <p className="text-md mt-2">Start creating a paste or explore existing ones from the sidebar!</p>
        </div>
      )}
    <div className='flex flex-column gap-4 mt-4'>
        {/* value="" rkhne se fix hojati hai */}
      <input type='text' placeholder='Title' value={title} className='p-[7px] w-[70vw] rounded-xl' onChange={handleChange}/>
      <button onClick={createPaste}>{pasteId?"Edit Paste":"Create Paste"}</button>
    </div>
    <div>
    <textarea value={content} placeholder='Add Contents' className='p-[7px] w-[70vw] h-[70vh] rounded-xs click:border-1'
    onChange={(e)=>{setContent(e.target.value)}}></textarea>
    </div>
    </div>
  )
}

export default Home
