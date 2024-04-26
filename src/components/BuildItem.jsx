import { Link, useSubmit } from "react-router-dom";
import classes from "./BuildItem.module.css";
import TotalCost from "./TotalCost";

function BuildItem({ build }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.build}>
      <h2>{build.gpuComponent.name}</h2>
      <p>
        <a href={build.gpuComponent.link}>{build.gpuComponent.link}</a>, $
        {build.gpuComponent.price}
      </p>
      <h2>{build.cpuComponent.name}</h2>
      <p>
        <a href={build.cpuComponent.link}>{build.cpuComponent.link}</a>, $
        {build.cpuComponent.price}
      </p>
      <h2>{build.caseComponent.name}</h2>
      <p>
        <a href={build.caseComponent.link}>{build.caseComponent.link}</a>, $
        {build.caseComponent.price}
      </p>
      <h2>{build.mbComponent.name}</h2>
      <p>
        <a href={build.mbComponent.link}>{build.mbComponent.link}</a>, $
        {build.mbComponent.price}
      </p>
      <h2>{build.psComponent.name}</h2>
      <p>
        <a href={build.psComponent.link}>{build.psComponent.link}</a>, $
        {build.psComponent.price}
      </p>
      <h2>{build.ramComponent.name}</h2>
      <p>
        <a href={build.ramComponent.link}>{build.ramComponent.link}</a>, $
        {build.ramComponent.price}
      </p>
      <h2>{build.storageComponent.name}</h2>
      <p>
        <a href={build.storageComponent.link}>{build.storageComponent.link}</a>,
        ${build.storageComponent.price}
      </p>
      <h1>
        <TotalCost className={classes.costDisplay} build={build} />
      </h1>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default BuildItem;
