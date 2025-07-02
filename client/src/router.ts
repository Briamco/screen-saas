import { createBrowserRouter } from "react-router";
import App from "./App";

const rotuer = createBrowserRouter([
  {
    path: "/",
    Component: App,
  }
]);

export default rotuer;