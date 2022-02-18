import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Slider.module.css';

const images = [
    '/img/featured1.jpg',
    '/img/featured2.jpg',
    '/img/featured3.jpg',
];

const Slider = () => {
    const [indexSlide, setIndexSlide] = useState(0);

    const handleArrow = index => {
        if (indexSlide === images.length - 1 && index === 1) {
            setIndexSlide(indexSlide - (images.length - 1));
            return;
        }

        if (indexSlide === 0 && index === -1) {
            setIndexSlide(indexSlide + (images.length - 1));
            return;
        }

        setIndexSlide(indexSlide + index);
    };

    return (
        <div className={styles.container}>
            <div
                className={`${styles.arrow} ${styles['arrow-left']}`}
                onClick={() => handleArrow(-1)}
            >
                <Image
                    src="/img/arrowl.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div
                className={styles.wrapper}
                style={{ transform: `translateX(-${indexSlide * 100}vw)` }}
            >
                {images.map((img, i) => (
                    <div className={styles['img-item']} key={i}>
                        <Image
                            src={img}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                ))}
            </div>
            <div
                className={`${styles.arrow} ${styles['arrow-right']}`}
                onClick={() => handleArrow(1)}
            >
                <Image
                    src="/img/arrowr.png"
                    layout="fill"
                    alt=""
                    objectFit="contain"
                />
            </div>
        </div>
    );
};

export default Slider;
