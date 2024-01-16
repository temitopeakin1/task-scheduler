import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer>
    <p>Have a good time</p>
    <Link to="/about" style={{ color: "red", textDecoration: 'none'}}>About</Link>
    </footer>
  )
}

export default Footer

