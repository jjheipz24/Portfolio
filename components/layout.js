import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import React, { useState } from 'react'
import NavBar from './navbar.js'

var classNames = require('classnames');

export default function Layout({ children }) {
    let toggle = false;

    const [toggleClassName, setToggleClassName] = useState(styles.navbarLinks);

    const handleClassChange = () => {
        console.log("clicked")
        toggleClassName === styles.navbarLinks ? setToggleClassName("hidden") : styles.navbarLinks;
    };

    return (
        <div>
            <Head>
                <title>Jin Jin Heipler</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <main>
                {/* <nav className={styles.navbar}>
                    <span></span>
                    <i className="fas fa-bars fa-2x"></i>
                    <div className={toggleClassName} onClick={handleClassChange}>
                        <ul>
                            <li>
                                <Link href="/"><a>Home</a></Link>
                            </li>
                            <li>
                                <Link href="/projects"><a>Projects</a></Link>
                            </li>
                            <li>
                                <Link href="/about"><a>About</a></Link>
                            </li>
                            <li>
                                <Link href="/resume"><a>Resume</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <NavBar></NavBar>
                <div className={styles.container}>
                    <div className={styles.children}>
                        {children}
                    </div>
                    <div className={styles.vidContainer}>
                        <video playsInline autoPlay loop muted poster="/images/space-background.png" className={styles.bgVideo}>
                            <source src="/videos/space-background.mp4" type="video/mp4" />
                            <source src="/videos/space-background.wmv" type="video/wmv" />
                            <source src="/videos/space-background.webm" type="video/webm" />
                            <p>Your browser does not support this video.</p>
                        </video>
                    </div>
                </div>
            </main>
        </div>
    )
}