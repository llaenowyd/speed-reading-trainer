import React from 'react'

const PasteBox = ({onInput}) => {
    return (
        
      <div>
      <textarea rows="4" cols="50" onInput={onInput} />
    </div>
    )
}