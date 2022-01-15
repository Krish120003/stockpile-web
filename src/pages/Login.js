import React from 'react'
import logo from '../assets/homeLogo.png'
import styles from "../styles/Login.module.scss"
import center from "../styles/Center.module.scss"

import FlatButton from '../components/FlatButton'

export default function Login() {
    return (
        <div className={styles.page}>
            <div className={center.centerContainer}>
                <div className={styles.wide}>
                    <div>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className={styles.text}>
                        <h1>Login</h1>
                    </div>

                    <FlatButton />
                </div>
            </div>
        </div>
    )
}