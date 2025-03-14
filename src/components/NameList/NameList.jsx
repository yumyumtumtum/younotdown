import NameInput from '../NameInput/NameInput'

function NameList({ numPeople, names, onNameChange, onDelete, addName }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: numPeople }).map((_, index) => (
        <NameInput
          key={`i${index}`}
          index={index}
          value={names[index] || ''}
          onChange={onNameChange}
          onDelete={onDelete}
          addName={() => addName(index)}
        />
      ))}
    </div>
  )
}

export default NameList
