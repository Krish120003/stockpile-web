import React from 'react'
import styles from "../styles/FlatButton.module.scss"
import { Link } from 'react-router-dom'


export default function FlatButton(props) {
    return (
        <Link to={props.route ? props.route : "#"} className={`${styles.button}  ${props.secondary ? styles.yellow : ''}`}>
            {props.label}
        </Link>
    )
}
