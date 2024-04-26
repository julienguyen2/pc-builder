// Import necessary libraries
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import BuildItem from "../components/BuildItem";

// Define the BuildDetailPage component
function BuildDetailPage() {
  const data = useRouteLoaderData("build-detail");

  return <BuildItem build={data.build} />;
}

export default BuildDetailPage;

// Define the buildDetailLoader function
export async function buildDetailLoader({ request, params }) {
  const id = params.buildId;

  const response = await fetch(
    "https://pc-builds-c4847-default-rtdb.firebaseio.com/builds/" + id + ".json"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected build." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

// Define the deleteBuildAction function
export async function deleteBuildAction({ params, request }) {
  const buildId = params.buildId;

  const response = await fetch(
    "https://pc-builds-c4847-default-rtdb.firebaseio.com/builds/" +
      buildId +
      ".json",
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not delete build." }, { status: 500 });
  }

  return redirect("/builds");
}