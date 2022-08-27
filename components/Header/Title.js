import styles from './Title.module.scss';

export default function Title() {

    return (
        <div className={styles.Title}>
            <div className={styles.text}>
                <h6>Our blog</h6>
                <h1>Stories {"&"} ideas</h1>
                <h5>The latest news to drive business strategy</h5>                
            </div>
            <div className={styles.SmilleyFace}>Smilley Face</div>
        </div>
    )
}