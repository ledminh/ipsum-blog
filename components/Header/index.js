import styles from './Header.module.scss';

import NavBar from './NavBar';
import Title from './Title';

export default function Header() {

    return (
        <div className={styles.Header}>
            <NavBar />
            <Title />
        </div>
    );
}