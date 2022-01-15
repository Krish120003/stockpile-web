import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/FloatingButton.module.scss";
import FlatButton from './FlatButton';


export default function FloatingButtons(props) {
    return (
        <div className={styles.main}>
            {/* <FlatButton label="wLog In"></FlatButton> */}
            {/* <p>{JSON.stringify(props.options)}</p> */}
            {props.options.map(data => {
                return (
                    <FlatButton route={data.route} label={data.label} secondary={data.secondary}></FlatButton>
                )
            })}

        </div>
    )
}
