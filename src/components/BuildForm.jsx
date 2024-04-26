import {
  Form,
  useNavigate,
  useNavigation,
  json,
  redirect,
} from "react-router-dom";
import classes from "./BuildForm.module.css";

function BuildForm({ method, build }) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {[
        "cpuComponent",
        "gpuComponent",
        "caseComponent",
        "mbComponent",
        "psComponent",
        "ramComponent",
        "storageComponent",
      ].map((component) => (
        <>
          <p>
            <label htmlFor={`${component}-name`}>{component} Name</label>
            <input
              id={`${component}-name`}
              type="text"
              name={`${component}-name`}
              required
              defaultValue={build ? build[component].name : ""}
            />
          </p>
          <p>
            <label htmlFor={`${component}-price`}>{component} Price</label>
            <input
              id={`${component}-price`}
              type="number"
              name={`${component}-price`}
              required
              defaultValue={build ? build[component].price : ""}
            />
          </p>
          <p>
            <label htmlFor={`${component}-link`}>{component} Link</label>
            <input
              id={`${component}-link`}
              type="url"
              name={`${component}-link`}
              required
              defaultValue={build ? build[component].link : ""}
            />
          </p>
        </>
      ))}
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default BuildForm;

export async function newBuildAction({ request, params }) {
  const method = request.method;

  const data = await request.formData();

  const buildData = {
    cpuComponent: {
      name: data.get("cpuComponent-name"),
      price: data.get("cpuComponent-price"),
      link: data.get("cpuComponent-link"),
    },
    gpuComponent: {
      name: data.get("gpuComponent-name"),
      price: data.get("gpuComponent-price"),
      link: data.get("gpuComponent-link"),
    },
    caseComponent: {
      name: data.get("caseComponent-name"),
      price: data.get("caseComponent-price"),
      link: data.get("caseComponent-link"),
    },
    mbComponent: {
      name: data.get("mbComponent-name"),
      price: data.get("mbComponent-price"),
      link: data.get("mbComponent-link"),
    },
    psComponent: {
      name: data.get("psComponent-name"),
      price: data.get("psComponent-price"),
      link: data.get("psComponent-link"),
    },
    ramComponent: {
      name: data.get("ramComponent-name"),
      price: data.get("ramComponent-price"),
      link: data.get("ramComponent-link"),
    },
    storageComponent: {
      name: data.get("storageComponent-name"),
      price: data.get("storageComponent-price"),
      link: data.get("storageComponent-link"),
    },
  };

  let url = "https://pc-builds-c4847-default-rtdb.firebaseio.com/builds";

  if (method === "PATCH") {
    const buildId = params.buildId;
    url = `https://pc-builds-c4847-default-rtdb.firebaseio.com/builds/${buildId}.json`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save build." }, { status: 500 });
  }

  return redirect("/builds");
}
