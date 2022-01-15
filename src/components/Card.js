import React from 'react'
import '../styles/Card.scss'

export default function Card({ src, alt, title, content, width = "331px", height = "134px" }) {
    return (
        <div className="Card" style={{ width: width, height: height }}>
            <div classname="header">
                <img src={src} alt={alt} style={{ width: width, height: 'calc{0.5*' + height + '}' }} />
            </div>
            <div classname='body' style={{ width: width, height: 'calc{0.5*' + height + '}' }}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

