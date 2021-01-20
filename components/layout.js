import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import React from 'react'
import NavBar from './navbar.js'
import SocialMedia from './socialmedia.js'

export default function Layout({ children, type }) {
    return (
        <div>
            <Head>
                <title>Jin Jin Heipler</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <NavBar type={type}></NavBar>
            <div className={styles.vidContainer}>
                <video playsInline autoPlay loop muted poster="/images/space-background.png" className={styles.bgVideo}>
                    <source src="/videos/space-background.mp4" type="video/mp4" />
                    <source src="/videos/space-background.wmv" type="video/wmv" />
                    <source src="/videos/space-background.webm" type="video/webm" />
                    <p>Your browser does not support this video.</p>
                </video>
            </div>
            <main className={styles.children}>
                {children}
                <footer className={styles.footer}>
                    <SocialMedia></SocialMedia>
                    <p>&copy; 2021 Jin Jin Heipler</p>
                </footer>
            </main>
        </div>
    )
}