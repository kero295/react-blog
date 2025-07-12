import { useParams, Link} from "react-router-dom"

const Postpage = ({posts, handleDelete}) => {

    const {id} = useParams();
    const post = posts.find(p => p.id.toString() === id)

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
           <h1 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h1>
           <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>

        <div className="flex justify-center gap-4 mt-6">
          <Link to={`/edit/${post.id}`}>
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300 "     
          >Edit</button>
          </Link>

          <button
            className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:bg-red-500 hover:shadow-lg transition-all duration-300 "      
            onClick={()  => {handleDelete(post.id)}}
          >Delete</button>
      </div>
    </div>

  )
}

export default Postpage
