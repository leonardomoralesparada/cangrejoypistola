import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../scenes/dashboard";
import Resolve from "../scenes/resolve"; 

export const router = createBrowserRouter([
    {
      path: "/resolve/:id",
      element: <Resolve />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
]);
  