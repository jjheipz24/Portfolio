import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import styles from '../styles/navbar.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

export default function NavBar({type}) {
    var navStyles = classNames('navbar-dark', styles.navbar, {
        [styles.clear]: type === "clear",
        [styles.default]: type !== "clear"
    });
    return (
        <Navbar className={navStyles} expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.hamburger} />
            <Navbar.Collapse id="responsive-navbar-nav" className={styles.collapsedBar}>
                <Nav className="ml-auto itemMenu">
                    <Nav.Item className={styles.item}>
                        <Link href="/">
                            <a className={styles.linkItem}>Home</a>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className={styles.item}>
                        <Link href="/projects">
                            <a className={styles.linkItem}>Projects</a>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className={styles.item}>
                        <Link href="/about">
                            <a className={styles.linkItem}>About</a>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className={styles.item}>
                        <Link href="/">
                            <a className={styles.linkItem}>Resume</a>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}