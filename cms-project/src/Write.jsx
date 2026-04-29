import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Write(){
const navigate= useNavigate()
    return (
        <>
    
      <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col bg-white rounded-xl shadow-xl p-6  w-full h-screen">
        <input 
        type="text" 
        placeholder=" Content title..." 
        className="text-slate-800 font-semibold text-base mb-4 border-b border-slate-200 outline-none w-full "
        />
        <textarea 
        className="text-slate-500 text-sm resize-none outline-none w-full"
        placeholder="Start writing..."
        ></textarea>
        <div className="flex justify-baseline gap-2">
          <button 
          onClick={()=>navigate(-1)}//go back to home page
          className="px-4 py-1.5 rounded-lg text-sm text-slate-600 border border-slate-200 hover:bg-slate-50">
            Cancel
          </button>
          <button 
          //include a fxn that posts the published content on click of this button
          className="px-4 py-1.5 rounded-lg text-sm text-white hover:text-slate-600 border border-slate-200 bg-black hover:bg-slate-50">
            Publish
            </button>
        </div>
      </div>
      </div>
        </>
    )
}