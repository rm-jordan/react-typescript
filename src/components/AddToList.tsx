import React from 'react';

const AddToList =() => {
  return (
    <div className="AddToList">
    <input 
        type="text"
  
        className="AddToList-input"
        name="name"

        placeholder="Name"
    />
    <input 
        type="text"

        className="AddToList-input"
        name="age"

        placeholder="Age"
    />
    <input 
        type="text"

        className="AddToList-input"
        name="img"
        placeholder="Image Url"
    />
    <textarea
        className="AddToList-input"
        name="note"

        placeholder="Note"
    />
    <button
        className="AddToList-btn"
    >
        Add to List
    </button>
    </div>
  )
}

export default AddToList;
