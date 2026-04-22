import {useState} from 'react'

export default function Cms(){
    const[modal,setModal] =useState(null)

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
               <a className="hover:underline">Create</a>
               <a className="hover:underline">Read</a>
               </div>

            <div className="flex gap-2">
               <button onClick={()=>setModal("signup")} className=" border rounded ">sign up</button>
               <button onClick={()=>setModal("signin")} className="border rounded">sign in</button>
            </div>

        </div>
        {/*Board */}
         <div className=" max-w-3xl mx-auto px-8 py-20">
            <h1 className="font-bold text-5xl leading-tight">Welcome to Bellus!{" "} 
               <span className="font-mono text-3xl ">Turn your time into a gem.</span>
            </h1>
            <h3 className='m-4'>A refined place for thoughtful writers and curious readers.</h3>
              <button onClick={()=>setModal("signup")} className="border rounded text-white bg-black text-sm px-6 py-3 hover:bg-gray-800">Start writing</button>    
        </div>

        <div className=" justify-items-center text-white bg-black">
         <div className="text-center mb-10">
         <h2 className="uppercase ">Our community</h2>
         <p1 className="tracking-widest">The people who make Bellus shine.</p1>
         </div>
         <div className="grid grid-cols-3">
               <div className="text-white border-b-white"> 
                  <h2 className="text-sm font-semibold text-shadow-white-600">300+</h2>
                  <span className="bg-slate-300 text-shadow-white-600 text-xs px-2 py-0.5">
                    Writers
                  </span>
                </div>
            
         </div>

        </div>
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
                    placeholder="Jane Doe"
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
       
        </>
    )
}