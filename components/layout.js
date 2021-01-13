import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import classnames from 'classnames'

export default function Layout({children}){
    return(
        <div>
            <Head>
                <title>Jin Jin Heipler</title>
            </Head>
            <main>{children}</main>
        </div>
    )
}