import React from 'react'
import logo from '../assets/homeLogo.png'
import stylesButton from "../styles/AccountButton.module.scss"
import center from "../styles/Center.module.scss"

import SingleButton from '../components/SingleButton'

export default function createport() {
    return (
        <div>
            <div>
                <img width="10%" border="5px" src={logo} alt="logo"></img>
            </div>
            <div>
                <h1>Create Portfolio</h1>
                <h2>Name</h2>
                <h2>Starting Funds</h2>

            </div>

            <div className={stylesButton.yellowButton}>
                <SingleButton name="Create Portfolio" />
            </div>
        </div>
    )
}
