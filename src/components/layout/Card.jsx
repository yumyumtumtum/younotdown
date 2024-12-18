function Card({ children, label }) {
  return (
    <div className="py-2 px-4 border-solid border-2 border-gray-300 rounded-md flex flex-col gap-y-2 shadow-lg">
      <h4 className="font-bold py-2 px-4 bg-sky-200 w-fit rounded-xl">{label}</h4>
      {children}
    </div>
  )
}

export default Card
