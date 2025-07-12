import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:w-auto"
      >
        <input
          type="text"
          id="searchbar"
          placeholder="Search posts..."
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
        />
      </form>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/posts" className="hover:text-blue-400 transition-colors">Add Posts</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

