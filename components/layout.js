import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Jin Jin Heipler</title>
            </Head>
            <main>
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