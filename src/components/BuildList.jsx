// BuildList.jsx
import { Link } from "react-router-dom";
import classes from "./BuildList.module.css";
import TotalCost from "./TotalCost";

function BuildList({ builds }) {
  
  return (
    <div className={classes.builds}>
      <h1>All Builds</h1>
      <ul className={classes.list}>
        {builds.map((build, index) => (
          <li key={index} className={classes.item}>
            <Link to={`/builds/${build.id}`}>
              <div className={classes.content}>
                <h2>{build.gpuComponent.name}</h2>
                <h2>{build.cpuComponent.name}</h2>
                <h2>{build.caseComponent.name}</h2>
                <h2>{build.mbComponent.name}</h2>
                <h2>{build.psComponent.name}</h2>
                <h2>{build.ramComponent.name}</h2>
                <h2>{build.storageComponent.name}</h2>
                <TotalCost build={build} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuildList;
