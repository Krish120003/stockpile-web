import React from 'react'
import logo from '../assets/homeLogo.png'
import styles from "../styles/Home.module.scss"

export default function Home() {
    return (
        <div className={styles.page}>
            <div>
                <img src={logo} alt="logo"></img>
            </div>
            <div class="frontPageText">
                <h1>StockPile.</h1>
                <h3>Learn Investing.</h3>
                <p>Life Will Change.</p>
            </div>
            <div>
                <button onClick="TBA">Sign Up</button>
                <button onClick="TBA">Log In</button>
            </div>//
        </div>
    )
}
