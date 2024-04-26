// SavedBuilds.jsx
import { useLoaderData, json } from "react-router-dom";
import BuildList from "../components/BuildList";

function SavedBuilds() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const builds = data.builds;

  return <BuildList builds={builds} />;
}

export default SavedBuilds;

export async function buildLoader() {
  const response = await fetch(
    "https://pc-builds-c4847-default-rtdb.firebaseio.com/builds.json"
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch builds." }, { status: 500 });
  } else {
    const data = await response.json();
    const buildsArray = Object.keys(data || {}).map((key) => ({
      id: key,
      ...data[key],
    }));
    return { builds: buildsArray };
  }
}