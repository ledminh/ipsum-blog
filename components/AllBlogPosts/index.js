import styles from './AllBlogPosts.module.scss';

import Image from 'next/image';

import pic1 from '../../imgs/pic1.jpg';
import pic2 from '../../imgs/pic2.jpg';
import pic3 from '../../imgs/pic3.jpg';
import pic4 from '../../imgs/pic4.jpg';

export default function AllBlogPosts() {

    return (
        <div className={styles.AllBlogPosts}>
            <h3>All blog posts</h3>
            <div className={styles.list}>
                <div className={styles.blogPost}>
                    <Image
                        src={pic1}
                        alt="A photo"
                        />
                    <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                    <p>Minh Le</p>
                    <p>11 Aug 2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus explicabo.</p>
                </div>

                <div className={styles.blogPost}>
                    <Image
                        src={pic2}
                        alt="A photo"
                        />
                    <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                    <p>Minh Le</p>
                    <p>11 Aug 2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus explicabo.</p>
                </div>

                <div className={styles.blogPost}>
                    <Image
                        src={pic3}
                        alt="A photo"
                        />
                    <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                    <p>Minh Le</p>
                    <p>11 Aug 2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus explicabo.</p>
                </div>

                <div className={styles.blogPost}>
                    <Image
                        src={pic4}
                        alt="A photo"
                        />
                    <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                    <p>Minh Le</p>
                    <p>11 Aug 2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus explicabo.</p>
                </div>
            </div>
        </div>
    )
}