import React from 'react'

export default function AddForm({input, setInputText, message, setMessage}) {

    function handleInput(e) {
        setInputText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault(); 

        if (input.length > 0) {
            fetch('http://localhost:3000/wishes', {
                method: 'POST',
                body: JSON.stringify({text: input}),
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

    return(
        <form>
            <input value={input} type="text" className="wish-input" onChange={handleInput}/>
            <button type="submit" className="wish-button" onClick={handleSubmit}>Add a wish</button>
            <p className='message'>{message}</p>
        </form>
    )
}
