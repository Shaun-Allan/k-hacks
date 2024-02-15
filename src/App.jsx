import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Inputs from "./pages/Inputs/Inputs";
import NotFound from "./pages/NotFound/NotFound";
import Simulation from "./pages/Simulation/Simulation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inputs",
    element: <Inputs />,
  },
  {
    path: "/simulation",
    element: <Simulation />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;