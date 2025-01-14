import _map from 'lodash/map'
import _capitalize from 'lodash/capitalize'

function Components() {
  const BUTTON_VARIATIONS = ['small', 'medium', 'large', 'disabled']

  const primaryButtonVariations = _map(BUTTON_VARIATIONS, variant => {
    return <td>
      <Button {...{ [variant]: true }} >{_capitalize(variant)} Primary Button</Button>
    </td>
  })

  const secondaryButtonVariations = _map(BUTTON_VARIATIONS, variant => {
    return <td>
      <Button secondary {...{ [variant]: true }} >{_capitalize(variant)} Secondary Button</Button>
    </td>
  })

  const successButtonVariations = _map(BUTTON_VARIATIONS, variant => {
    return <td>
      <Button success {...{ [variant]: true }} >{_capitalize(variant)} Success Button</Button>
    </td>
  })

  const dangerButtonVariations = _map(BUTTON_VARIATIONS, variant => {
    return <td>
      <Button danger {...{ [variant]: true }} >{_capitalize(variant)} Danger Button</Button>
    </td>
  })

  const warningButtonVariations = _map(BUTTON_VARIATIONS, variant => {
    return <td>
      <Button warning {...{ [variant]: true }} >{_capitalize(variant)} Warning Button</Button>
    </td>
  })


  return (
    <div className="py-12 px-24 flex flex-col gap-y-8">
      <div className="text-xl font-bold">Components</div>

      <Card label="Base Elements">
        <div className="grid gap-10 grid-cols-3 grid-rows-3">
          <h1> Header 1 </h1>
          <h2> Header 2 </h2>
          <h3> Header 3 </h3>
          <h4> Header 4 </h4>
          <h5> Header 5 </h5>
          <h6> Header 6 </h6>
        </div>
      </Card>

      <Card label="Buttons">
        <table className="table-fixed mb-20 border-separate border-spacing-y-3">
          <thead>
            <tr>
              <th className="text-left"></th>
              <th className="text-left">Small</th>
              <th className="text-left">Medium</th>
              <th className="text-left">Large</th>
              <th className="text-left">Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Primary</th>
              {primaryButtonVariations}
            </tr>
            <tr>
              <th>Secondary</th>
              {secondaryButtonVariations}
            </tr>
            <tr>
              <th>Success</th>
              {successButtonVariations}
            </tr>
            <tr>
              <th>Danger</th>
              {dangerButtonVariations}

            </tr>
            <tr>
              <th>Warning</th>
              {warningButtonVariations}

            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Components
