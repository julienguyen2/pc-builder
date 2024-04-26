function BuildList({ builds }) {
  return (
    <div className={classes.builds}>
      <h1>All Builds</h1>
      <ul className={classes.list}>
        {builds.map((build, index) => (
          <li key={index} className={classes.item}>
            <Link to={`/build/${index}`}>
              <div className={classes.content}>
                {build.gpuComponent && <h2>{build.gpuComponent.name}</h2>}
                {build.cpuComponent && <h2>{build.cpuComponent.name}</h2>}
                {build.caseComponent && <h2>{build.caseComponent.name}</h2>}
                {build.mbComponent && <h2>{build.mbComponent.name}</h2>}
                {build.psComponent && <h2>{build.psComponent.name}</h2>}
                {build.ramComponent && <h2>{build.ramComponent.name}</h2>}
                {build.storageComponent && (
                  <h2>{build.storageComponent.name}</h2>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
