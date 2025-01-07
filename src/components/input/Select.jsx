function Option({ value, disabled }) {
  return <option disabled={disabled}> {value} </option>
}

function Select({ className, value = 'default', options, onChange }) {
  const optionElements = options.map((option) => (
    <Option key={option.key} value={option.value} disabled={option.disabled} />
  ))

  return (
    <select
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value={'default'}>
        Select Type
      </option>

      {optionElements}
    </select>
  )
}

export default Select
