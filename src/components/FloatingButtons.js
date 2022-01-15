import React from 'react'
import styles from "../styles/FloatingButton.module.scss";
import FlatButton from './FlatButton';


export default function FloatingButtons(props) {
    return (
        <div className={styles.main}>
            <FlatButton label="Sign Up"></FlatButton>
            <FlatButton label="Log In"></FlatButton>
        </div>
    )
}
