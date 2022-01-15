import React from 'react'
import styles from "../styles/FlatButton.module.scss"
export default function FlatButton(props) {
    return (
        <a className={[styles.button]} href={props.url}>
            {props.label}
        </a>
    )
}
