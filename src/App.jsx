import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddBuild from "./pages/AddBuild";
import BuildList, { buildLoader } from "./pages/SavedBuilds";
import BuildDetailPage, {
  deleteBuildAction,
  buildDetailLoader,
} from "./pages/BuildDetail";
import EditBuildPage from "./pages/EditBuild";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

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
            element: <BuildList />,
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
