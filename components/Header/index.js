import styles from './Header.module.scss';

export default function Header() {

    return (
        <div className={styles.Header}>
            <nav>
                <div>Logo</div>
                <ul>
                    <li>Sales</li>
                    <li>Top management</li>
                    <li>Sales Ops</li>
                    <li>Finance</li>
                </ul>
                <button>Subscribe</button>
            </nav>
            <div>
                <div>
                    <h6>Our blog</h6>
                    <h1>Stories {"&"} ideas</h1>
                    <h5>The latest news to drive business strategy</h5>                
                </div>
                <div>Smilley Face</div>
            </div>
        </div>
    );
}