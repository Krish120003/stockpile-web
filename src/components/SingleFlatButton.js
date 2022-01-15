import React from 'react'
import styles from "../styles/SingleButton.module.scss"


export default function FlatButton(props) {
    return (
        <a className={[styles.button]} href={props.url}>
            {props.label}
        </a>
    )
}
