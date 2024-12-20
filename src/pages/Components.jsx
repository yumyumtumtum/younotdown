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
              <th className='text-left'>Type</th>
              <th className='text-left'>Small</th>
              <th className='text-left'>Medium</th>
              <th className='text-left'>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary</td>
              <td><Button small>Small Button</Button></td>
              <td><Button>Regular Button</Button></td>
              <td><Button medium>Regular Button</Button></td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td><Button secondary small>Small Secondary Button</Button></td>
              <td><Button secondary>Regular Secondary Button</Button></td>
              <td><Button secondary medium>Regular Secondary Button</Button></td>
            </tr>
            <tr>
              <td>Miscellaneous</td>
              <td><Button success>Success Button</Button></td>
              <td><Button danger>Danger Button</Button></td>
              <td><Button warning>Warning Button</Button></td>
              <td><Button info>Info Button</Button></td>
              <td><Button primary disabled>Info Button</Button></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Components
