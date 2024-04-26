import { Link, useSubmit } from "react-router-dom";
import classes from "./BuildItem.module.css";

function BuildItem({ build }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  // Calculate the total cost of the build
  const totalCost =
    build.gpuComponent.price +
    build.cpuComponent.price +
    build.caseComponent.price +
    build.mbComponent.price +
    build.psComponent.price +
    build.ramComponent.price +
    build.storageComponent.price;

  return (
    <article className={classes.build}>
      <h1>{build.gpuComponent.name}</h1>
      <h2>{build.cpuComponent.name}</h2>
      <h2>{build.caseComponent.name}</h2>
      <h2>{build.mbComponent.name}</h2>
      <h2>{build.psComponent.name}</h2>
      <h2>{build.ramComponent.name}</h2>
      <h2>{build.storageComponent.name}</h2>
      <h3>Total Cost: {totalCost}</h3>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default BuildItem;