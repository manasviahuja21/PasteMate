import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState={
    pastes:localStorage.getItem("pastes")
    ?JSON.parse(localStorage.getItem("pastes"))//phle se hi hai usi ko dedo
    :[]//all data gets stored as string in localstorage then i json parse it to get an 
    // object in which there is a paste key with array value
}

export const pasteSlice=createSlice({
    name:'paste',
    initialState,
    reducers:{
    addPaste:(state,action)=>{
       try{ const paste=action.payload;
        state.pastes.push(paste);
        localStorage.setItem('pastes',JSON.stringify(state.pastes))
        toast.success("Paste Added Successfully")
       }
       catch(e)
       {
        toast.error("Could not add paste")
       }
    },
    updatePaste:(state,action)=>{
    try{
        //Already existing paste 
        const paste=action.payload;
        let index=state.pastes.findIndex((value)=>{return value._id===paste._id});
        console.log(index);
        if(index!==-1)
        {
            state.pastes[index] = { ...state.pastes[index], ...paste };
            localStorage.setItem('pastes',JSON.stringify(state.pastes))
            toast.success("Paste Updated Successfully")
        }
        else{
        state.pastes.push(paste);
        localStorage.setItem('pastes',JSON.stringify(state.pastes))
        toast.success("Paste Added Successfully")
        }
       }
       catch(e)
       {
        toast.error("Could not add paste")
       }
    },
    resetPaste:(state,action)=>{
        //2 tasks in each function
        //update your state
        //update your local storage
        try{
        state.pastes=[];
        localStorage.removeItem("pastes");
        toast.success("Pastes Cleared");
        }
        catch{
            toast.error("Unable to clear all pastes");
        }

    },
    deletePaste:(state,action)=>{
        try{
        //Already existing paste 
        const paste=action.payload;
        let index=state.pastes.findIndex((value)=>{return value._id===paste._id});
        console.log(index);
        if(index!==-1)
        {
            state.pastes.splice(index,1);
            localStorage.setItem('pastes',JSON.stringify(state.pastes))
            toast.success("Paste Deleted Successfully")
        }
        else{
        toast.error("No such Paste Exists")
        }
       }
       catch(e)
       {
        toast.error("Could not delete paste")
       }
    }
}
})
export const {addPaste,updatePaste,resetPaste,deletePaste}=pasteSlice.actions;
export default pasteSlice.reducer