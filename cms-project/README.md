
# Task : Creating a content management system

Core Features needed
**Authentication**

Sign up, log in, log out
User roles — reader, writer, admin
Password reset

**Posts / Articles**

Create, edit, delete posts
Rich text editor (bold, headings, images, links)
Draft vs published status
Timestamps (created at, updated at)

**Categories & Tags**

Assign categories and tags to posts
Filter posts by category or tag

**Search**

Search posts by title or content
Filter by author, date, category

**Comments**

Readers can comment on posts
Writers/admins can delete or moderate comments

**User Profiles**

Profile picture, bio, social links
List of posts by that author


**Pages You Need**

Home — featured/latest posts
Blog listing — all posts with pagination
Single post page — full article + comments
Write/Edit post — editor page
Dashboard — manage your own posts
Admin panel — manage all users and posts
Profile page
Search results page
Login / Register pages


**Database Tables (or Collections)**
Users — id, name, email, password, role, avatar, bio
Posts — id, title, body, author_id, status, category, tags, created_at
Comments — id, post_id, user_id, body, created_at
Categories — id, name, slug
Tags — id, name


 