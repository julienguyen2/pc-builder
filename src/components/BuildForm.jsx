import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./BuildForm.module.css";

function BuildForm() {
  const [formState, setFormState] = useState({
    gpuComponent: { name: "", price: 0, link: "" },
    cpuComponent: { name: "", price: 0, link: "" },
    caseComponent: { name: "", price: 0, link: "" },
    mbComponent: { name: "", price: 0, link: "" },
    psComponent: { name: "", price: 0, link: "" },
    ramComponent: { name: "", price: 0, link: "" },
    storageComponent: { name: "", price: 0, link: "" },
  });

  const labels = {
    gpuComponent: "Graphics Processing Unit",
    cpuComponent: "Central Processing Unit",
    caseComponent: "Case",
    mbComponent: "Motherboard",
    psComponent: "Power Supply",
    ramComponent: "RAM Memory",
    storageComponent: "Storage (SSD/HDD)",
  };

  const fieldLabels = {
    name: "Component Name",
    price: "Component Price",
    link: "Component Link",
  };

  const handleChange = (e, component) => {
    const value =
      e.target.name === "price" ? parseFloat(e.target.value) : e.target.value;
    setFormState({
      ...formState,
      [component]: { ...formState[component], [e.target.name]: value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://pc-builds-c4847-default-rtdb.firebaseio.com/builds.json",
      {
        method: "POST",
        body: JSON.stringify(formState),
      }
    );
    if (response.ok) {
      alert("Data saved successfully!");
    } else {
      alert("Error saving data!");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={classes.form}>
      {Object.keys(formState).map((component) => (
        <div key={component}>
          <h2>{labels[component]}</h2>
          {Object.keys(formState[component]).map((field) => (
            <p key={field}>
              <label htmlFor={`${component}-${field}`}>
                {fieldLabels[field]}
              </label>
              <input
                id={`${component}-${field}`}
                type={field === "price" ? "number" : "text"}
                name={field}
                required
                value={formState[component][field]}
                onChange={(e) => handleChange(e, component)}
              />
            </p>
          ))}
        </div>
      ))}
      <div className={classes.actions}>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
}

export default BuildForm;

export async function newEventAction({ request, params }) {
  const method = request.method;

  const data = await request.formData();

  const buildData = {
    gpuComponent: {
      name: data.get("gpuName"),
      price: data.get("gpuPrice"),
      link: data.get("gpuLink"),
    },
    cpuComponent: {
      name: data.get("cpuName"),
      price: data.get("cpuPrice"),
      link: data.get("cpuLink"),
    },
    caseComponent: {
      name: data.get("caseName"),
      price: data.get("casePrice"),
      link: data.get("caseLink"),
    },
    mbComponent: {
      name: data.get("mbName"),
      price: data.get("mbPrice"),
      link: data.get("mbLink"),
    },
    psComponent: {
      name: data.get("psName"),
      price: data.get("psPrice"),
      link: data.get("psLink"),
    },
    ramComponent: {
      name: data.get("ramName"),
      price: data.get("ramPrice"),
      link: data.get("ramLink"),
    },
    storageComponent: {
      name: data.get("storageName"),
      price: data.get("storagePrice"),
      link: data.get("storageLink"),
    },
  };

  let url = "https://pc-builds-c4847-default-rtdb.firebaseio.com/builds.json";

  if (method === "PATCH") {
    const buildId = params.buildId;
    url = `https://pc-builds-c4847-default-rtdb.firebaseio.com/builds/${buildId}.json`;
  }

  const response = await fetch(url, {
    method: method === "PATCH" ? "PUT" : method, // Firebase uses PUT for updates
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