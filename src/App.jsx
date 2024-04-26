import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddBuild from "./pages/AddBuild";
import SavedBuilds, { buildLoader } from "./pages/SavedBuilds";
import BuildDetailPage, {
  deleteBuildAction,
  buildDetailLoader,
} from "./pages/BuildDetail";
import EditBuildPage from "./pages/EditBuild";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import { newBuildAction } from "./components/BuildForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddBuild /> },
      {
        path: "builds",
        children: [
          {
            index: true,
            element: <SavedBuilds />,
            loader: buildLoader,
          },
          {
            path: ":buildId",
            id: "build-detail",
            loader: buildDetailLoader,
            children: [
              {
                index: true,
                element: <BuildDetailPage />,
                action: deleteBuildAction,
              },
              {
                path: "edit",
                element: <EditBuildPage />,
                action: newBuildAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
