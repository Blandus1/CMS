function handleSigning({mode,onClose}){
   const [form,setForm]= useState({ email: "", password: "", name: "" })
   const isSignUp= mode==='SignUp'

   return(
      <>
      
      </>
   )
}



export default function Cms(){
    
    return (
        <>
        {/*Header */}
        <div className="flex flex-col items-center justify-center ">
         <h1 className="font-sans font-bold text-9xl ">Bellus</h1>
         <h3 className="font-serif text-xl">A  space for writers and readers</h3>
        </div>
      

        {/*Authentication part */}
        <div className=" flex justify-between text-white bg-black min-w-screen p-4">
             <div className="flex gap-2">
               <a className="underline">Create</a>
               <a className="underline">Read</a>
               </div>

            <div className="flex gap-2">
               <button className=" border rounded ">sign up</button>
               <button className="border rounded">sign in</button>
               {/* <button className="border rounded">log out</button> ---to be used on sign in page*/}
            </div>

            {/* <div>
               <label for="password">Password: </label>
               <input type="password" id="password" name="Password..."  placeholder="Input password..." required className="shadow-2xl border border-gray-400 w-1/2"/>
            </div>  ---should appear on click of sign in button and sign up when user wants to create an account*/}
        </div>
        {/*Board */}
         <div className="flex flex-col p-25">
            <h1 className="font-mono text-5xl ">Welcome to Bellus! 
               <span className="font-bold text-5xl ">Turn your time into a gem.</span>
            </h1>
            <h3>A refined place for thoughtful writers and curious readers.</h3>
                  
        </div>

        <div className=" justify-items-center text-white bg-black">
         <div>
         <h2>OUR COMMUNITY</h2>
         <p1>The people who make Bellus shine.</p1>
         </div>
         <div className="grid grid-cols-3">
               <div className="text-white bg-yellow-500 p-30 ">
                  <h2 className="text-sm font-semibold text-shadow-white-600">300+</h2>
                  <span className="bg-slate-300 text-shadow-white-600 text-xs px-2 py-0.5">
                    Writers
                  </span>
                </div>
            
         </div>

        </div>

        {/*Partners */}


         {/* Creating Posts or Articles*/}
         <div>
            <></>
         </div>

          {/*Categories and Tags */}
          <div>
            <></>
          </div>

          {/*Search */}
          <div>
            <></>
          </div>

           {/*Comments */}
           <div>
            <></>
           </div>
           {/*User profiles */}
           <div>
            <></>
           </div>
        </>
    )
}