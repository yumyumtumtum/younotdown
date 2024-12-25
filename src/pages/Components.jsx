function Components() {
  return (
    <div className="py-12 px-24 flex flex-col gap-y-8">
      <div className="text-xl font-bold">Components</div>

      <Card label="Base Elements">
        <div className='grid gap-10 grid-cols-3 grid-rows-3'>
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
              <th className='text-left'></th>
              <th className='text-left'>Small</th>
              <th className='text-left'>Medium</th>
              <th className='text-left'>Large</th>
              <th className='text-left'>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Primary</th>
              <td><Button small>Small Primary Button</Button></td>
              <td><Button>Regular Primary Button</Button></td>
              <td><Button medium>Large Primary Button</Button></td>
              <td><Button disabled>Disabled Regular Primary</Button></td>
            </tr>
            <tr>
              <th>Secondary</th>
              <td><Button secondary small>Small Secondary Button</Button></td>
              <td><Button secondary>Regular Secondary Button</Button></td>
              <td><Button secondary medium>Large Secondary Button</Button></td>
              <td><Button secondary disabled>Disabled Regular Secondary</Button></td>

            </tr>
            <tr>
              <th>Success</th>
              <td><Button success small>Small Success Button</Button></td>
              <td><Button success>Regular Success Button</Button></td>
              <td><Button success medium>Large Success Button</Button></td>
              <td><Button success disabled> Disabled Regular Success</Button></td>

            </tr>
            <tr>
              <th>Danger</th>
              <td><Button danger small>Small Danger Button</Button></td>
              <td><Button danger>Regular Danger Button</Button></td>
              <td><Button danger medium>Large Danger Button</Button></td>
              <td><Button danger disabled>Disabled Regular Danger</Button></td>

            </tr>
            <tr>
              <th>Warning</th>
              <td><Button warning small>Small Warning Button</Button></td>
              <td><Button warning>Regular Warning Button</Button></td>
              <td><Button warning medium>Large Warning Button</Button></td>
              <td><Button warning disabled>Disabled Regular Warning</Button></td>

            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Components
