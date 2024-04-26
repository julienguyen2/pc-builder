import { json, redirect, useRouteLoaderData } from "react-router-dom";
import BuildItem from "../components/BuildItem";

function BuildDetailPage() {
  const data = useRouteLoaderData("build-detail");

  return <BuildItem build={data.build} />;
}
export default BuildDetailPage;

export async function buildDetailLoader({ request, params }) {
  const id = params.buildId;

  const response = await fetch(
    `https://pc-builds-c4847-default-rtdb.firebaseio.com/builds/${id}.json`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected build." },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    const build = { id, ...data }
    return { build };
  }
}

export async function deleteBuildAction({ request, params }) {
  const buildId = params.buildId;
  const url = `https://pc-builds-c4847-default-rtdb.firebaseio.com/builds/${buildId}.json`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw json(
      { message: `Could not delete build. Error: ${errorMessage}` },
      { status: 500 }
    );
  }

  return redirect("/builds");
}
