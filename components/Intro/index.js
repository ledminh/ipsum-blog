import styles from './Intro.module.scss';

export default function Intro() {

    return (
        <div className={styles.Intro}>
            <div className={styles.featuredArticle}>
                <h3>The 3 Best Practices in Sales Prospecting</h3>
            </div>
            <div className={styles.article}>
                <h4>The 3 Best Practices in Sales Prospecting</h4>
            </div>
            <div className={styles.article}>
                <h4>Make your next presentation unforgettable</h4>
            </div>
            <div className={styles.article}>
                <h4>4 trends shaping the role of Sales Ops in 2022</h4>
            </div>
        </div>
    )
}