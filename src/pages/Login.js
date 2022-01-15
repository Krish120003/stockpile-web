import React from 'react'
import logo from '../assets/homeLogo.png'
import styles from "../styles/Login.module.scss"
import center from "../styles/Center.module.scss"
import formBox from "../styles/FormBox.module.scss"

import SingleButton from '../components/SingleButton'

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
                        <form>
                            <div>
                                <label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        name="email"
                                        placeholder="E-mail"
                                    //onChange ={updateForm} 
                                    //value = {form.email}
                                    />
                                    <input placeholder="Email" />
                                    <input placeholder="Password" />
                                </label>
                            </div>
                        </form>
                    </div>
                    <SingleButton />
                </div>
            </div>
        </div >
    )
}