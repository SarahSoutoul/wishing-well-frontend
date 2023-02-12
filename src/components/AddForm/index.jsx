import React, {useState, useEffect} from 'react'
import Tag from '../Tag';

export default function AddForm({input, setInputText, message, setMessage, tags, setTags}) {
    const [tagConnection, setTagConnection] = useState([]);

    function handleInput(e) {
        setInputText(e.target.value)
    }

    function handleTagConnection(e) {
        if (e.target.checked) {
            setTagConnection([...tagConnection, parseInt(e.target.value)])
        } else {
            let filteredTags = tagConnection.filter(el => el !== parseInt(e.target.value))
            setTagConnection(filteredTags)
        }
    }

    function handleSubmit(e) {
        e.preventDefault(); 

        if (input.length > 0) {
            fetch('http://localhost:3000/wishes', {
                method: 'POST',
                body: JSON.stringify({text: input, tagIds: tagConnection}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setMessage('Wish added successfully.');
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            })
            .catch((err) => {
                console.log(err.message);
                setMessage('There was a problem in creating your wish.');
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            });
            setInputText('')
        } else {
            setMessage('Please enter a wish.');
            setTimeout(() => {
                setMessage('')
            }, 5000)
        }
    }

    useEffect(() => {
        async function loadTags() {
            const response = await fetch("http://localhost:3000/tags");
            const data = await response.json();
            setTags(data)
        };
        loadTags();
    }, [])

    return(
        <form>
            <input value={input} type="text" className="wish-input" onChange={handleInput}/>
            <div className='tag-container'>      
            {tags.map((tag) => <Tag tag={tag} handleTagConnection={handleTagConnection}/>)}
            </div>  
            <button type="submit" className="wish-button" onClick={handleSubmit}>Add a wish</button>
            <p className='message'>{message}</p>
        </form>
    )
}
