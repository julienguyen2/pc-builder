import { json, redirect } from "react-router-dom";
import PageContent from "../components/PageContent";
import BuildForm from "../components/BuildForm";

function AddBuild() {
  return (
    <PageContent title="Make a Computer!">
      <p>Start adding your components to build your own personal computer!</p>
      <BuildForm method="post" />
    </PageContent>
  );
}

export default AddBuild;
