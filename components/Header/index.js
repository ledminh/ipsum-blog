import styles from './Header.module.scss';

import NavBar from './NavBar';

export default function Header() {

    return (
        <div className={styles.Header}>
            <NavBar />
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