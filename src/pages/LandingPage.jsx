import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="bg-cyan-100 flex h-screen w-full items-center justify-center">
      <div className="border-solid border-2 border-cyan-950 p-96 rounded-3xl flex-col center-center gap-10">
        <h1> You not down </h1>

        <Link to="/home">
          <Button large> Start a Poll </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
