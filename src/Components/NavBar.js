import { Link } from "react-router-dom"

const navStyle = {
    backgroundColor : 'AliceBlue',
    padding: '16px 32px'
}

const linkStyle = {
    marginRight: '16px'
}


const NavBar = () => {
    return (
        <nav style={navStyle}>
            <Link style={linkStyle} to={'/'}>Home</Link>
            <Link style={linkStyle} to={'/about'}>About</Link>
        </nav>
    )
}

export default NavBar