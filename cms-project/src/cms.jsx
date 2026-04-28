import {useState} from 'react'

const writers= 300;
const readers= 900;
const audience = writers + readers;

export default function Cms(){
    const[modal,setModal] =useState(null)
    const [confirmUnknown,setConfirmUnknown]= useState(null)
    const [writing,setWriting]= useState(null)

    return (
        <>
        {/*Header */}
        <div className="flex flex-col items-center justify-center ">
         <h1 className="font-sans font-bold text-9xl ">Bellus</h1>
         <h3 className="font-serif text-xl tracking-widest">A  space for writers and readers</h3>
        </div>
      

        {/*Authentication part */}
        <div className=" flex justify-between text-white bg-black min-w-screen p-4">
             <div className="flex gap-2">
               <a onClick={()=>setModal("signup")}  className="hover:underline">Create</a>
               <a className="hover:underline">Read</a> {/* this anchor should be leading to a page with stories written and their rating, the reader can choose which one they want to start reading by clicking on the button */}
               </div>

            <div className="flex gap-2">
               <button onClick={()=>setModal("signup")} className=" border rounded ">sign up</button>
               <button onClick={()=>setModal("signin")} className="border rounded">sign in</button>
            </div>

        </div>
        {/*Welcome remarks */}
         <div className=" max-w-3xl mx-auto px-8 py-20">
            <h1 className="font-bold text-5xl leading-tight">Welcome to Bellus!{" "} 
               <span className="font-mono text-3xl ">Turn your time into a gem.</span>
            </h1>
            <h3 className='m-4'>A refined place for thoughtful writers and curious readers.</h3>
            {/*confirms if a writer wants to write unknown */}
              <button onClick={()=>setConfirmUnknown("startwriting")} className="border rounded text-white bg-black text-sm px-6 py-3 hover:bg-gray-800">Start writing</button>    
        </div>

         {/*Board  & numbers in grids */}
        <div className=" justify-items-center text-white bg-black">
         <div className="text-center mb-10">
         <h2 className="uppercase ">Our community</h2>
         <p1 className="tracking-widest">The people who make Bellus shine.</p1>
         </div>

         <div className="grid grid-cols-3 p-5">
               <div className="border border-white items-center py-10 px-4 text-center hover:bg-white hover:text-black transition-colors"> 
                  <h2 className="text-4xl font-semibold text-shadow-white-600">{writers}+</h2>
                  <span className=" tracking-widest text-shadow-white-600 text-sm px-2 py-0.5 uppercase">
                    Writers
                  </span>
                </div>
                <div className="border border-white bg-white text-black hover:text-white hover:bg-black items-center py-10 px-4 text-center"> 
                  <h2 className="text-4xl font-semibold text-shadow-white-600">{audience}+</h2>
                  <span className=" tracking-widest text-sm px-2 py-0.5 uppercase">
                    Audience
                  </span>
                </div>
                <div className="border border-white items-center py-10 px-4 text-center hover:bg-white hover:text-black transition-colors"> 
                  <h2 className="text-4xl font-semibold text-shadow-white-600">{readers}+</h2>
                  <span className="tracking-widest text-shadow-white-600 text-sm px-2 py-0.5 uppercase">
                    Readers
                  </span>
                </div>
         </div>

        </div>

        {/* Modal management */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black w-full max-w-sm mx-4 border border-black">

            {/* Modal header */}
            <div className="flex justify-between items-center border-b border-black px-6 py-4">
              <span className="text-sm font-semibold uppercase tracking-widest">
                {modal === "signup" ? "Create Account" : "Welcome Back"}
              </span>
              <button onClick={() => setModal(null)} className="text-lg hover:opacity-50">✕</button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-6 flex flex-col gap-4">

              {/* Name field — only for sign up */}
              {modal === "signup" && (
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="(ex:Elon Musk)"
                    className="border-b border-black py-2 text-sm outline-none placeholder-gray-300"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="border-b border-black py-2 text-sm outline-none placeholder-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Password</label>
                <input
                  type="password"
                  placeholder="Enter password..."
                  className="border-b border-black py-2 text-sm outline-none placeholder-gray-300"
                />
              </div>

              <button className="mt-2 bg-black text-white py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors">
                {modal === "signup" ? "Create Account" : "Sign In"}
              </button>

              <p className="text-center text-xs text-gray-400">
                {modal === "signup" ? "Already have an account? " : "Don't have an account? "}
                <span
                  className="text-black underline cursor-pointer"
                  onClick={() => setModal(modal === "signup" ? "signin" : "signup")}
                >
                  {modal === "signup" ? "Sign in" : "Sign up"}
                </span>
              </p>

            </div>
          </div>
        </div>
      )}
      {/*Unknown confirmation modal */}
      {confirmUnknown && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-80">
            <h3 className="text-slate-800 font-semibold text-base mb-1"> Are you sure you want to write as an unknown author?</h3>
            <p className="text-slate-500 text-sm mb-5">Go to create, if you are not sure.</p>
            <div className="flex justify-end gap-2">
              <button
              onClick={()=>setConfirmUnknown(null)} 
              className="px-4 py-1.5 rounded-lg text-sm text-slate-600 border border-slate-200 hover:bg-slate-50">
                cancel
              </button>
              <button 
              onClick={()=>setWriting('contentpage')}
              //onClick fxn that leads to blank writing page with a title and a publish button at the end.
              // this page shall have a home button, history to track where they left off, views they got and comments from fans
              className="px-4 py-1.5 rounded-lg text-sm text-white bg-black hover:bg-white hover:text-black">
                Write
              </button>
            </div>
          </div>
        </div>
      ) }
      {/* Content writing modal */}
      {writing && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col bg-white rounded-xl shadow-xl p-6  w-full h-screen">
        <input 
        type="text" 
        placeholder=" Content title..." 
        className="text-slate-800 font-semibold text-base mb-4 border-b border-slate-200 outline-none w-full "
         rows={1}
  onInput={(e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }}
  style={{ overflow: "hidden" }}
        />
        <textarea 
        className="text-slate-500 text-sm resize-none outline-none w-full"
        placeholder="Start writing..."
        ></textarea>
        <div className="flex justify-baseline gap-2">
          <button 
          onClick={()=>setWriting(null)}
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
)}
        </>
    )
}