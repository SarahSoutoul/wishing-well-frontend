import React, {useState} from 'react'
import { AddForm } from '../../components';

export default function AddWish() {
    const [input, setInputText] = useState('');
    const [message, setMessage] = useState('');

    return (
        <AddForm input={input} setInputText={setInputText} message={message} setMessage={setMessage} />
    )
}
