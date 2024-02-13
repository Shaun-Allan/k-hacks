import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
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