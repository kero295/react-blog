import Layout from "./Layout"
import Home from "./Home"
import Posts from "./Posts"
import About from "./About"
import Postpage from "./Postpage"
import Editposts from "./Editposts"
import {Routes, Route, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"




function App() {
  const [posts, setPosts] = useState([]); 

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
      axios
        .get("https://687250d876a5723aacd44914.mockapi.io/api/v1/posts")
        .then((res) => {
          setPosts(res.data)
          setLoading(false)
        })
        .catch((err) => {
          setError("There is an error in fetching data")
          setLoading(false)
          console.error("Error:", err.message);
        })
    }, [])

    useEffect(() => {
      const filteredPosts = posts.filter(post =>
  post.title.toLowerCase().includes(search.toLowerCase()) ||
  post.body.toLowerCase().includes(search.toLowerCase())
);
    setSearchResults(filteredPosts.reverse())
    }, [search, posts])

    const handleSubmit = async (e) => {
    e.preventDefault();
    const id =(posts.length) ? posts[posts.length - 1].id + 1 : 1
    const newPost = {title: postTitle, id: id, body: postBody}
    try{
      const response = await axios.post("https://687250d876a5723aacd44914.mockapi.io/api/v1/posts", newPost)
        setPosts([response.data, ...posts])
        setPostTitle('')
        setPostBody('')
        navigate('/') 
    } catch (err) {
      console.log("Error in adding posts", err)
    }
   
  }

  const handleDelete = async (id) => {

    try{
      await axios.delete(`https://687250d876a5723aacd44914.mockapi.io/api/v1/posts/${id}`)
      const newPosts =  posts.filter(post => (
      post.id !== id 
       ))
      setPosts(newPosts)
      navigate('/')
    } catch (err) {
      console.log("Error in deleting the post", err)
    }
   
  }

  const handleEdit = async (id) => {

    const updatedPost = {id: id, title: editTitle, body: editBody}
      try{
        const response = await axios.put(`https://687250d876a5723aacd44914.mockapi.io/api/v1/posts/${id}`, updatedPost)

         const editedPosts = posts.map(p => (
          p.id.toString() === id.toString() ? {...response.data} : p 
        ))

        setPosts(editedPosts)
        setEditTitle('')
        setEditBody('')
        navigate('/')
          } catch (err) {
            console.log("Error in updating posts", err)
          }
   
   }



  return (
    
      <Routes>
        <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
        posts={posts}
        />}>
          <Route index element={<Home 
           filteredPosts={searchResults}
           loading={loading}
           error={error}
          />}/>
          <Route  path="posts" element={<Posts 
          postTitle = {postTitle}
          setPostTitle = {setPostTitle}
          postBody = {postBody}
          setPostBody = {setPostBody}
          handleSubmit = {handleSubmit}
          />}/>
          <Route path="posts/:id" element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
          <Route path="/edit/:id" element={<Editposts
          posts={posts}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editBody={editBody}
          setEditBody={setEditBody}
          handleEdit={handleEdit}
          />}/>
          <Route  path="about" element={<About />}/>
        </Route>
      </Routes>
   
  )
}

export default App
