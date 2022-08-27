import styles from './NavBar.module.scss';

export default function NavBar() {

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.menu}>
                <li>Sales</li>
                <li>Top management</li>
                <li>Sales Ops</li>
                <li>Finance</li>
            </ul>
            <button className={styles.subscribeButton}>Subscribe</button>
        </nav>

    )
}