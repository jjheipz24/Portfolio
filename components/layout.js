import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import React from 'react'
import NavBar from './navbar.js'
import SocialMedia from './socialmedia.js'

export default function Layout({ children, type }) {
    return (
        <div className={styles.full}>
            <Head>
                <title>Jin Jin Heipler</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png"></link>
                <link rel="manifest" href="/images/favicons/site.webmanifest"></link>
                <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5"></link>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
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
                    <p>&copy; 2022 Jin Jin Heipler</p>
                </footer>
            </main>
        </div>
    )
}