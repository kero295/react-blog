import { useParams} from "react-router-dom"
import  {useEffect} from "react" 


const Editposts = ({posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit}) => {

    const {id} = useParams();
    const post = posts.find(p => p.id.toString() === id)


     useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  if (!post) return <p className="text-center mt-10">Post not found</p>;

  return (
    <div>
        <form onSubmit={(e) => {e.preventDefault(); handleEdit(post.id);}} className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="addPostTitle" className="block text-gray-700 font-semibold mb-1">Add Post Title</label>
              <input
                type="text"
                id="addPostTitle"
                autoFocus
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="addPostBody" className="block text-gray-700 font-semibold mb-1">Add Post Body</label>
              <textarea
                id="addPostBody"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-28"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-bold"
            >
              Submit
            </button>
         </form>

    </div>
  )
}

export default Editposts
