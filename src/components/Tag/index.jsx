import React from 'react';

export default function Tag({tag, handleTagConnection}) {

    return (
        <div className='tag'>
            <input type="checkbox" name={tag.text} value={tag.id} onChange={handleTagConnection}/>
            <label htmlFor={tag.id}>{tag.text}</label><br></br>
        </div>
    )
}