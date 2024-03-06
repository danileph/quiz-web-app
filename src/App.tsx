import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { TestPage } from "@/pages/test";
import { TopicsPage } from "@/pages/topics";
import { TopicPage } from "@/pages/topic";
import { ProgressMonitoring } from "@/pages/progress-monitoring";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/topics"} />,
  },
  {
    path: "topics",
    element: <TopicsPage />,
  },
  {
    path: "topics/:topicUrl",
    element: <TopicPage />,
  },
  {
    path: "topics/:topicUrl/test",
    element: <TestPage />,
  },
  {
    path: "progress-monitoring",
    element: <ProgressMonitoring />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
