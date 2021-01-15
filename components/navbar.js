import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import styles from '../styles/navbar.module.scss'
import Link from 'next/link'

export default function NavBar(){
    return(
        <Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end ml-auto">
                <Nav.Item>
                    <Link href="/">
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/projects">
                        <Nav.Link>Projects</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/about">
                        <Nav.Link>About</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/">
                        <Nav.Link>Resume</Nav.Link>
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}