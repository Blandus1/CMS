
/*
Core Features
Authentication

Sign up, log in, log out
User roles — reader, writer, admin
Password reset

Posts / Articles

Create, edit, delete posts
Rich text editor (bold, headings, images, links)
Draft vs published status
Timestamps (created at, updated at)

Categories & Tags

Assign categories and tags to posts
Filter posts by category or tag

Search

Search posts by title or content
Filter by author, date, category

Comments

Readers can comment on posts
Writers/admins can delete or moderate comments

User Profiles

Profile picture, bio, social links
List of posts by that author


Pages You Need

Home — featured/latest posts
Blog listing — all posts with pagination
Single post page — full article + comments
Write/Edit post — editor page
Dashboard — manage your own posts
Admin panel — manage all users and posts
Profile page
Search results page
Login / Register pages


Database Tables (or Collections)

Users — id, name, email, password, role, avatar, bio
Posts — id, title, body, author_id, status, category, tags, created_at
Comments — id, post_id, user_id, body, created_at
Categories — id, name, slug
Tags — id, name


Nice-to-Haves (add later)

Like / bookmark posts
Follow authors
Email notifications
Reading time estimate
Related posts
Dark mode

 */
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