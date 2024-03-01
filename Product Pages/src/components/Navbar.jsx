import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <nav className="flex justify-center gap-20 text-2xl">
        <Link to='/'>Home</Link>
        <Link to='About'>About</Link>
        <Link to='Contact'>Contact</Link>
        <Link to='Products'>Products</Link>
      </nav>
    </>
  )
}

export default Navbar