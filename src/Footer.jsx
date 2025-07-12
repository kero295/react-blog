

const Footer = () => {

  const year = new Date() 
  return (
    <footer className="bg-blue-300 text-2xl font-mono font-bold text-center">
      <p>Copyright &copy; {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer
