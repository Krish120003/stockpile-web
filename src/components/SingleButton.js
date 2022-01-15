import React from 'react'
import styles from "../styles/FloatingButton.module.scss";
import FlatButton from './FlatButton';


export default function FloatingButtons(props) {
    return (
        <div className={styles.main}>
            <FlatButton label={props.name}></FlatButton>
        </div>
    )
}
