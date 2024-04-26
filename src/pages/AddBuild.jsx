import PageContent from "../components/PageContent";
import BuildForm from "../components/BuildForm";

function AddBuild() {
  return (
    <PageContent title="Add a Build!">
      <p>Start adding your components to build your personal computer!</p>
      <BuildForm method="post" />
    </PageContent>
  );
}

export default AddBuild;
