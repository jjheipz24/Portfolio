import styles from '../styles/button.module.scss'
import Link from 'next/link'
export default function Button(props) {
    return (
        <button className={styles.button} type="button">
            <Link href={props.link}><a className={styles.title}>{props.title}</a></Link>
        </button>
    )
}