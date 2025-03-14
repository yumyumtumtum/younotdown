function NameInput({ index, value, onChange, onDelete, addName }) {
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter' && value) {
      addName()
    }
  }

  return (
    <div className="flex gap-4">
      <label htmlFor={`name-${index}`}> {index + 1} </label>
      <input
        id={`name-${index}`}
        type="text"
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        className="border-2"
        onKeyDown={(e) => _handleKeyDown(e)}
      />

      <Button small danger onClick={() => onDelete(index)}>
        X
      </Button>
    </div>
  )
}

export default NameInput
