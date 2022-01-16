import React from 'react'
import logo from '../assets/homeLogo.png'
import stylesButton from "../styles/AccountButton.module.scss"
import center from "../styles/Center.module.scss"
import logoStyle from "../styles/RightLogo.module.scss"
import styles from "../styles/CreatePortf.module.scss"

import SingleButton from '../components/SingleButton'

export default function createport() {
    return (
        <div className={styles.page}>
            <div className={center.centerContainer}>
                <div>
                    <img className={logoStyle.logo} src={logo} alt="logo"></img>
                    <div className={styles.text}>
                        <h1>Create Portfolio</h1>
                        <h2>Name</h2>
                        <form className={styles.form}>
                            <div>
                                <input placeholder="Enter Portfolio Name..." />

                            </div>
                        </form>
                        <h2>Starting Funds</h2>
                        <form className={styles.form}>
                            <div>
                                <input placeholder="Enter Starting Funds..." />

                            </div>
                        </form>
                    </div>
                    <SingleButton background-color="#FFC700" name="Create Portfolio" />
                </div>
            </div>
        </div>
    )
}
