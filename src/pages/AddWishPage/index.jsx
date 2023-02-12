import React, {useState} from 'react'
import { AddForm } from '../../components';

export default function AddWish() {
    const [input, setInputText] = useState('');
    const [message, setMessage] = useState('');
    const [tags, setTags] = useState([]);

    return (
        <AddForm input={input} setInputText={setInputText} message={message} setMessage={setMessage} tags={tags} setTags={setTags}/>
    )
}
