function YouDown() {
  return (
    <div>
      <Header />
      <div className="bg-app-background bg-cover bg-center min-h-screen text-center text-4xl font-bold">
        Are you down?
        <div className="h-56 grid grid-cols-3 gap-4 content-center ...">
          <div>
            <Button bg="black" btnText="nah" textColor="white" />
          </div>
          <div>
            <Button bg="bg-green-500" btnText="maybe" textColor="white" />
          </div>
          <div>
            <Button bg="bgred-500" btnText="bet" textColor="white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouDown
