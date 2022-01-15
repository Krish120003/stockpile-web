import React from 'react'
import logo from '../assets/homeLogo.png'
import styles from "../styles/Home.module.scss"
import center from "../styles/Center.module.scss"

import FlatButton from '../components/FlatButton'
import FloatingButtons from '../components/FloatingButtons'

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={center.centerContainer}>
                <div>
                    <div>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className={styles.text}>
                        <h1>StockPile.</h1>
                        <h2>Learn Investing.</h2>
                        <h3>Life Will Change.</h3>
                    </div>
                    <FloatingButtons options={
                        [
                            { label: "Sign Up", secondary: true },
                            { label: "Log In", route: "/login" }
                        ]
                    } />
                </div>
            </div>
        </div>
    )
}
