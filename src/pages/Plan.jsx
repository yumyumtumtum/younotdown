import Header from '../components/header/Title'
import Button from '../components/Button/Button'

function Plan() {
  return (
    <div>
      <Header />
      <div
        className="
          bg-app-background bg-cover bg-center min-h-screen text-center text-4xl font-bold
        "
      >
        Hello, World!
        <Button bg="black" btnText="Follow me" textColor="white" />
      </div>
    </div>
  )
}

export default Plan
