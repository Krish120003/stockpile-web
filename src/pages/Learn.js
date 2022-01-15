import React from 'react'
import styles from "../styles/Learn.module.scss"
import center from "../styles/Center.module.scss"
import Card from '../components/Card'
export default function Learn() {
    return (
        <div>
            <div className={styles.main} >
                <div className={center.centerContainer}>
                    <div className={styles.learntitle}>
                        <h1>Learn</h1>
                    </div>
                </div>
            </div >
            <Card src={"insertimage"} alt="StockPile" title="Introduction to Money and Investing" />
        </div>
    )
}
