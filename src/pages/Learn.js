import React from 'react'
import styles from "../styles/Learn.module.scss"
import center from "../styles/Center.module.scss"
import Card from '../styles/Card.scss'


export default function Learn(props) {
    return (

        <div className={styles.main}>
            <div className={center.centerContainer}>
                <div className={styles.learntitle}>
                    <h1>Learn</h1>
                    <div className={Card.container}>
                        <div className={Card.main}>
                            <div className={styles.img} style={{
                                background: `url(${"https://imagelink"})`
                            }}>
                            </div>
                            <div className={Card.content}>
                                <h1>Introduction to Money and Investing</h1>
                                <p>StockPile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}
