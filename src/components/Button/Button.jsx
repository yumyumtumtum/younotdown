// eslint-disable-next-line object-curly-newline
function Button({ children, small, medium, secondary }) {
  // eslint-disable-next-line operator-linebreak
  let className = 'w-fit  border-solid border '

  if (small) {
    className += ' py-0 px-1 text-sm rounded-sm '
  }

  if (!small && !medium) {
    // Regular - Default
    className += ' py-0.5 px-2 rounded-sm '
  }

  if (medium) {
    className += ' py-2 px-4 text-lg rounded-md '
  }

  if (!secondary) {
    className += `
      border-blue-900 
      text-white  
      bg-blue-900 hover:bg-blue-600 active:bg-blue-400
    `
  }

  if (secondary) {
    className += `
      border-blue-200 
      text-black  
      bg-blue-100 hover:bg-blue-300 active:bg-blue-400
    `
  }

  return (
    <button className={className} type="button">
      {children}
    </button>
  )
}

export default Button
