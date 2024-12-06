function Button({ bg, btnText, textColor }) {
  return (
    <button className={`bg-${bg} py-4 px-7 text-${textColor}`} type="button">
      {btnText}
    </button>
  )
}

export default Button
