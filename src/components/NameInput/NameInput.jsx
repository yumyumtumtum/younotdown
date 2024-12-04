import React from 'react'

function NameInput({ index, value, onChange }) {
  return (
    <div>
      <label htmlFor={`name-${index}`}> Person{index + 1}: </label>
      <input
        id={`name-${index}`}
        type="text"
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
      />
    </div>
  )
}

export default NameInput
