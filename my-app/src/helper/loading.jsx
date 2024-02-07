
import styles from './loading.module.css'
import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";


const PageLoader = () => {
    
        return (
            <div className={styles.cont}>
                <BounceLoader color="#ff7f00" />
            </div>
        )
}



export default PageLoader