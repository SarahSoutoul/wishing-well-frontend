import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Wish() {
    const {id} = useParams();
    const [wish, setWish] = useState({});

    useEffect(() => {
        async function loadWish() {

            const response = await fetch(`http://localhost:3000/wishes/${id}`);
            const data = await response.json();
            setWish(data)
        };

        loadWish();

    }, [])

    return <main>
        <h1 className="wish-text">{wish.text}</h1>
        <Link to="/wishes">Back</Link>
    </main>
}
