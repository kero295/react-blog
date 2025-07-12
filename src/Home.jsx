import { Link } from "react-router-dom"


const Home = ({filteredPosts, error, loading}) => {

  if(loading) return <p className="text-blue-500 flex justify-center mt-3 text-3xl">Loading...</p> 
  
  if(error) return <p  className="text-red-500  mt-1 text-3xl">{error}</p>

  return (
     <div className="container mx-auto p-4">

    {filteredPosts.length === 0 ? (<p className="text-center text-gray-500 text-xl mt-10">NO posts to display</p>) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map(post => (
              <Link to={`/posts/${post.id}`} key={post.id}>
                <div
                  key={post.id}
                  className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4"
                >
                  <h2 className="font-semibold text-xl mb-2 text-blue-800">{post.title}</h2> 
                  <p className="text-base text-gray-600 leading-relaxed">{post.body}</p>
                </div>
            </Link> 
          ))}
        </div>
    )}
    
   
      

      </div>
  )
}

export default Home
