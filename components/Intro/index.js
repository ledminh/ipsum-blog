import styles from './Intro.module.scss';

import Image from 'next/image';

import pic1 from '../../imgs/pic1.jpg';
import pic2 from '../../imgs/pic2.jpg';
import pic3 from '../../imgs/pic3.jpg';
import pic4 from '../../imgs/pic4.jpg';

export default function Intro() {

    return (
        <div className={styles.Intro}>
            <div className={styles.featuredArticle}>
                <Image 
                    src={pic1}
                    alt="Photo 1"
                />
                <h3>The 3 Best Practices in Sales Prospecting</h3>
            </div>
            <div className={styles.article}>
                <Image 
                    src={pic2}
                    alt="Photo 2"
                />
                <h4>The 3 Best Practices in Sales Prospecting</h4>
            </div>
            <div className={styles.article}>
                <Image 
                    src={pic3}
                    alt="Photo 3"
                />
                <h4>Make your next presentation unforgettable</h4>
            </div>
            <div className={styles.article}>
                <Image 
                    src={pic4}
                    alt="Photo 4"
                />
                <h4>4 trends shaping the role of Sales Ops in 2022</h4>
            </div>
        </div>
    )
}