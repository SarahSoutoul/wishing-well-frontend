import React, {useState, useEffect} from 'react'
import { Wish } from '../../components';
// import { Link } from 'react-router-dom';

export default function Wishes() {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
        async function loadSnacks() {
            const response = await fetch("http://localhost:3000/wishes");
            const data = await response.json();
            setWishes(data)
        };
        loadSnacks();
  }, [])

  return (
    <main className="wish-main">
        <h1>Wishes</h1>
        <div className="wish-holder">
         {wishes.map((wish) => <Wish key={wish.id} wish={wish}/>)}
        </div>
    </main>
  )
}
