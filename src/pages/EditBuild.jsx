import { useRouteLoaderData } from "react-router-dom";
import BuildForm from "../components/BuildForm";

function EditBuildPage() {
  const data = useRouteLoaderData("build-detail");

  return <BuildForm method="patch" build={data.build} />;
}

export default EditBuildPage;
