import styles from '../styles/socialmedia.module.scss'

export default function SocialMedia() {
    return (
        <div className={styles.container}>
            <hr />
            <div className={styles.links}>
                <a className={styles.icon} href="https://www.facebook.com/jjheipz" title="Facebook Link"><i className="fab fa-facebook-square fa-2x social"></i></a>
                <a className={styles.icon} href="https://www.linkedin.com/in/jjheipler" title="LinkedIn Link"><i className="fab fa-linkedin fa-2x social"></i></a>
                <a className={styles.icon} href="https://www.github.com/jjheipz24" title="Github Repo"><i className="fab fa-github-square fa-2x social"></i></a>
                <a className={styles.icon} href="mailto:heipler.jj@gmail.com" title="Email"><i className="fas fa-envelope-square fa-2x social"></i></a>
            </div>
        </div>
    )
}