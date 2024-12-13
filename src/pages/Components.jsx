import Button from '../components/Button/Button'
import Card from '../components/layout/Card'

function Components() {
  return (
    <div className="py-12 px-24 flex flex-col gap-y-8">
      <div className="text-xl font-bold">Components</div>

      <Card>
        <div className="text-lg ">Buttons</div>

        <Button small>Small Button</Button>
        <Button>Regular Button</Button>
        <Button medium>Regular Button</Button>

        <Button secondary small>
          Small Secondary Button
        </Button>
        <Button secondary>Regular Secondary Button</Button>
        <Button secondary medium>
          Regular Secondary Button
        </Button>

        <Button tertiary small>
          Small tertiary Button
        </Button>
        <Button tertiary>Regular tertiary Button</Button>
        <Button tertiary medium>
          Regular tertiary Button
        </Button>

        <Button success>Success Button</Button>
        <Button danger>Danger Button</Button>
        <Button warning>Warning Button</Button>
        <Button info>Info Button</Button>

        <Button primary disabled>
          Info Button
        </Button>
      </Card>
    </div>
  )
}

export default Components
