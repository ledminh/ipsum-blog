import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <div className={styles.footer}>
            <p className={styles.p}>Created by <a href="https://www.ledminh.dev">Minh Le</a>.</p>
            <p className={styles.p}>Design: {" "}
                <a href="https://dribbble.com/shots/18064353-Blog-home">IpsumBlog</a>
            </p>
        </div>
    );
}