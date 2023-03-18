import React from 'react';
// import styles from '../styles/Concat.module.css'
import styles from '../styles/Concat.module.scss'
//组件内style 各组件style可以使用相同的类名，不冲突/不互相影响 同时也不会管全局style

const Concat = () => {
    return (
        <div>
            <h2 className={styles.highLightScss}>concat page</h2>
        </div>
    );
};

export default Concat;
