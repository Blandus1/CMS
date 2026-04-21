
export default function Cms(){
    
    return (
        <>
         <h1 className="flex items-center justify-center font-sans font-bold text-9xl  shadow-xl ">Bellus</h1>

        {/*Authentication part */}
        <div className=" flex flex-col gap-4">
            <div className="flex justify-end gap-2 shadow text-white bg-black  p-2">
               <button className="border rounded">sign up</button>
               <button className="border rounded">sign in</button>
               <button className="border rounded">log out</button>
            </div>
            <div>
               <label for="password">Password: </label>
               <input type="password" id="password" name="Password..."  placeholder="Input password..." required className="shadow-2xl border border-gray-400 w-1/2"/>
            </div>
        </div>

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