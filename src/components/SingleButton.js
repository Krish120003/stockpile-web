import React from 'react'
import styles from "../styles/SingleButton.module.scss";
import SingleFlatButton from './SingleFlatButton';


export default function FloatingButtons(props) {
    return (
        <div className={styles.main}>
            <SingleFlatButton label={props.name}></SingleFlatButton>
        </div>
    )
}
