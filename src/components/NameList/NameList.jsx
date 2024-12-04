import NameInput from '../NameInput/NameInput'

function NameList({ numPeople, names, onNameChange }) {
  return (
    <div>
      <h2>Enter Names:</h2>
      {Array.from({ length: numPeople }).map((_, index) => (
        <NameInput
          key={`i${index}`}
          index={index}
          value={names[index] || ''}
          onChange={onNameChange}
        />
      ))}
    </div>
  )
}

export default NameList
