function Card({ children }) {
  return (
    <div className="py-2 px-4 border-solid border-2 border-gray-300 rounded-md flex flex-col gap-y-2">
      {children}
    </div>
  )
}

export default Card
