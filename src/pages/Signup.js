import React from 'react'
import logo from '../assets/homeLogo.png'
import styles from "../styles/Login.module.scss"
import center from "../styles/Center.module.scss"


import SingleButton from '../components/SingleButton'

export default function Signup() {
    return (
        <div className={styles.page}>
            <div className={center.centerContainer}>
                <div className={styles.wide}>
                    <div>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className={styles.text}>
                        <h1>Signup</h1>
                        <form>
                            <div>
                                <input placeholder="Email" />
                                <input placeholder="Password" />
                                <input placeholder="Confirm Password" />
                            </div>
                        </form>
                    </div>
                    <h4>Already have an account? Log In.</h4>
                    <SingleButton name="Sign Up" />
                </div>
            </div>
        </div >
    )
}
