import React from 'react'
import { Link } from 'react-router-dom';

export default function Wish({wish}) {
    return (
        <Link className="wish-card" to={`/wishes/${wish.id}`} >
            <span className="wish-item">{wish.text}</span>
        </Link>
    )
}
