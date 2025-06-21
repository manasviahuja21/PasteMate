import React from 'react'
import { FiEdit, FiTrash,FiClipboard ,FiEye} from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {addPaste,updatePaste,resetPaste,deletePaste} from '../redux/pasteSlice.js'
import { toast } from 'react-toastify';
const PasteCard = (props) => {
    const dispatch=useDispatch();
    function handleDelete(paste)
    {
        dispatch(deletePaste(paste));
    }
    function handleCopy(paste)
    {
        try{
        navigator.clipboard.writeText(paste.content);
        toast.success("Copied to clipboard")
        }
        catch(e)
        {
            toast.error("Could not copy");
        }
    }
  return (
    <div className='w-full max-w-2xl border border-gray-300 rounded-md p-4 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>

  {/* Top Row: Title + Buttons */}
  <div className='flex justify-between items-start mb-2'>

    {/* Title */}
    <h2 className='text-lg font-semibold '>{props.paste.title}</h2>

    {/* Buttons */}
    <div className='flex flex-row gap-2'>
      <button onClick={() => handleDelete(props.paste)} title="Delete" className="p-1 rounded ">
        <FiTrash size={14}  />
      </button>

      <button onClick={() => handleCopy(props.paste)} title="Copy" className="p-1 rounded ">
        <FiClipboard size={14}  />
      </button>

      <NavLink to={`/?pasteId=${props.paste._id}`} title="Edit" className="p-1 rounded ">
      <button>
        <FiEdit size={14} />
        </button>
      </NavLink>
    
      <NavLink to={`/pastes/${props.paste._id}`} title="View" className="p-1 rounded ">
      <button>
        <FiEye size={14} />
        </button>
      </NavLink>
    </div>

  </div>

  {/* Content Preview */}
  <p >{props.paste.content.slice(0, 50)}...</p>
</div>

  )
}

export default PasteCard
