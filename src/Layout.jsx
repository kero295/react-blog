import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = ( {search, setSearch, posts} ) => {
  return (
    <div className="min-h-screen flex flex-col " >
        <Header />
        <Navbar 
          search={search}
          setSearch={setSearch}
          posts={posts}
        />
        <main className="flex-grow ">
            <Outlet />
        </main>
        <Footer /> 
    </div>
  )
}

export default Layout
