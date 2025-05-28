async function getData() {
    const res = await fetch(
      "https://snowtooth-api-rest.fly.dev"
    );
    return res.json();
  }

  function MountainLiftBlock({ id, name, status, elevationGain }) {
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{status}</td>
        <td>{elevationGain ? `Elevation Gain: ${elevationGain} m` : 'N/A'}</td>
      </tr>
    );
  }
  

  export default async function Page() {
    const data = await getData();
   
    return (
      <main>
        <h1>Lift Status Info</h1>
        {/* Debug Output (remove in production) */}
   {/* <pre>{JSON.stringify(data, 'sdsds', 5)}</pre> */}
        <table>
          <thead>
            <tr>
              <th>Lift Name</th>
              <th>Current Status</th>
              <th> elevationGain </th>
            </tr>
          </thead>
          <tbody>
            {data.map((lift) => (
                <MountainLiftBlock
                    key={lift.id}
                    id={lift.id}
                    name={lift.name}
                    status={lift.status}
                    elevationGain={lift.elevationGain}
                />
            ))}
          </tbody>
        </table>
      </main>
    );
  }