import Header from '../components/header/Title'
import Button from '../components/Button/Button'

/** ***********  ✨ Codeium Command ⭐  ************ */
/**
 * Page: YouDown
 * Description: This is the page where people choose if they are down or not
 *
 *
 * TO DO:
 * 1. Create an interaction and logic for conditionals/dependents
 * 2. Link this part has access to the people from CreatePoll
=/** ****  01d50298-3648-4dd2-b691-cfd4efcc1fbb  ****** */
function YouDown() {
  return (
    <div>
      <Header />
      <div className="bg-app-background bg-cover bg-center min-h-screen text-center text-4xl font-bold">
        Are you down?
        <div className="h-56 grid grid-cols-3 gap-4 content-center justify-center px-4">
          <div>
            <Button bg="black" btnText="No" textColor="white" />
          </div>
          <div>
            <Button bg="bg-green-500" btnText="Maybe" textColor="white" />
          </div>
          <div>
            <Button bg="bgred-500" btnText="YES" textColor="white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouDown
